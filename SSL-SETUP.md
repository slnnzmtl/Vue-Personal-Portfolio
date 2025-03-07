# SSL Certificate Setup for slnnzmtl.xyz

This document outlines how to set up and renew SSL certificates for the slnnzmtl.xyz website using Let's Encrypt and Certbot.

## Initial Setup

1. Make sure the required directories exist:
   ```bash
   mkdir -p ./certbot/www/.well-known/acme-challenge
   mkdir -p ./certbot/conf
   ```

2. Use the dedicated script to generate SSL certificates:
   ```bash
   ./generate-ssl.sh
   ```

   This script will:
   - Create necessary directories
   - Test if the ACME challenge path is accessible
   - Stop the production container temporarily
   - Generate certificates using Certbot in standalone mode
   - Restart the production container
   - Reload Nginx to apply the certificates

3. Alternatively, you can manually generate certificates:
   ```bash
   # Stop the production container
   docker compose down prod
   
   # Generate certificates using standalone mode
   docker run --rm -p 80:80 -v ./certbot/conf:/etc/letsencrypt -v ./certbot/www:/var/www/certbot certbot/certbot certonly --standalone --email slonanezametil@example.com --agree-tos --no-eff-email --force-renewal -d slnnzmtl.xyz
   
   # Restart the production container
   docker compose up -d prod
   
   # Reload Nginx
   docker compose exec prod nginx -s reload
   ```

## Certificate Renewal

Certificates from Let's Encrypt are valid for 90 days. You should set up automatic renewal to ensure your certificates don't expire.

### Using the Update Script

The easiest way to manage certificates is through the `update.sh` script, which handles both application updates and certificate renewal:

```bash
./bash/update.sh
```

This script will:
- Pull the latest code changes
- Ensure SSL certificate directories exist
- Check if certificates need to be generated or renewed
- Reload Nginx to apply any certificate changes

### Manual Renewal

You can manually renew the certificates using the standalone method:

```bash
# Stop the production container
docker compose down prod

# Renew certificates
docker run --rm -p 80:80 -v ./certbot/conf:/etc/letsencrypt -v ./certbot/www:/var/www/certbot certbot/certbot renew

# Restart the production container
docker compose up -d prod

# Reload Nginx
docker compose exec prod nginx -s reload
```

### Automatic Renewal

To set up automatic renewal, add a cron job:

1. Open the crontab editor:
   ```bash
   crontab -e
   ```

2. Add the following line to run the renewal script twice a month:
   ```
   0 0 1,15 * * /path/to/your/project/bash/update.sh >> /path/to/your/project/update.log 2>&1
   ```

## Troubleshooting

### Certificate Generation Issues

If you encounter issues with certificate generation:

1. Run the troubleshooting script:
   ```bash
   ./troubleshoot-ssl.sh
   ```

2. Verify that the ACME challenge path is accessible:
   ```bash
   curl http://slnnzmtl.xyz/.well-known/acme-challenge/test-file
   ```

3. Check if your domain resolves to the correct IP:
   ```bash
   dig +short slnnzmtl.xyz
   ```

4. Ensure port 80 is open and accessible from the internet for the ACME challenge:
   ```bash
   nc -zv slnnzmtl.xyz 80
   ```

5. Check the Certbot logs:
   ```bash
   docker compose logs certbot
   ```

### SSL Configuration Issues

If the site loads but SSL is not working correctly:

1. Check Nginx logs:
   ```bash
   docker compose logs prod
   ```

2. Verify the certificate files exist:
   ```bash
   ls -la ./certbot/conf/live/slnnzmtl.xyz/
   ```

3. Test the Nginx configuration:
   ```bash
   docker compose exec prod nginx -t
   ```

## SSL Configuration Details

The SSL configuration in `nginx.prod.conf` includes:

- TLS 1.2 and 1.3 protocols
- Strong cipher suites
- HSTS headers for enhanced security
- Automatic HTTP to HTTPS redirection

This configuration provides an A+ rating on SSL Labs tests. 