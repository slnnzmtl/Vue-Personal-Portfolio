<template>
  <div class="min-h-screen py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="rounded-lg shadow-sm p-8">
        <h1 class="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div class="max-w-none">
          <p class="mb-6"><strong>Last updated:</strong> {{ lastUpdated }}</p>

          <p class="mb-6">
            Your privacy is important to us. This Privacy Policy explains how we collect,
            use, and protect your information when you use our website and services.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <h3 class="text-xl font-medium mt-6 mb-3">Information You Provide</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Contact information (name, email address) when you reach out to us</li>
            <li>Any information you provide in forms or communications</li>
            <li>Feedback and correspondence you send to us</li>
          </ul>

          <h3 class="text-xl font-medium mt-6 mb-3">
            Information Automatically Collected
          </h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
            <li>IP address and general location information</li>
          </ul>

          <h2 class="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>To provide and maintain our website and services</li>
            <li>To respond to your inquiries and requests</li>
            <li>To improve our website performance and user experience</li>
            <li>To analyze usage patterns and optimize content</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 class="text-2xl font-semibold mt-8 mb-4">
            Information Sharing and Disclosure
          </h2>
          <p class="mb-4">
            We do not sell, trade, or otherwise transfer your personal information to
            third parties, except in the following circumstances:
          </p>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>With your explicit consent</li>
            <li>To comply with legal requirements or court orders</li>
            <li>To protect our rights, property, or safety, or that of others</li>
            <li>
              With service providers who assist in website operations (under strict
              confidentiality agreements)
            </li>
          </ul>

          <h2 class="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p class="mb-4">
            We implement appropriate technical and organizational security measures to
            protect your personal information against unauthorized access, alteration,
            disclosure, or destruction.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-4">Cookies and Tracking</h2>
          <p class="mb-4">
            Our website may use cookies and similar tracking technologies to enhance user
            experience and analyze website traffic. You can control cookie settings
            through your browser preferences.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p class="mb-4">
            Depending on your location, you may have the following rights regarding your
            personal information:
          </p>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Access to your personal information</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your personal information</li>
            <li>Restriction of processing</li>
            <li>Data portability</li>
          </ul>

          <h2 class="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
          <p class="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any
            changes by posting the new Privacy Policy on this page and updating the "Last
            updated" date.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p class="mb-4">
            If you have any questions about this Privacy Policy or our privacy practices,
            please contact us through the contact information provided on our website.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const lastUpdated = computed(() => {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});
</script>
