import { useModalService } from "./useModal";
import { ModalKey } from "@/modals/types";

interface ConsultationOptions {
  title?: string;
  description?: string;
  service?: string;
  message?: string;
}

interface ServiceInfo {
  title: string;
  description: string;
  service: string;
  message: string;
}

export enum ServiceType {
  AIAnalytics = "ai-analytics",
  Automations = "automations",
  WebDevelopment = "web-development",
  MobileDevelopment = "mobile-development",
  Custom = "custom"
}

const SERVICE_CONFIGS: Record<ServiceType, ServiceInfo> = {
  [ServiceType.AIAnalytics]: {
    title: "Отримати консультацію з AI-аналітики",
    description: "Заповніть форму, і ми зв'яжемося з вами для обговорення AI-рішень для вашого бізнесу.",
    service: "AI-аналітика для продажів",
    message: "Хочу отримати консультацію щодо AI-аналітики для мого бізнесу."
  },
  [ServiceType.Automations]: {
    title: "Консультація з автоматизації",
    description: "Дізнайтеся, як автоматизувати бізнес-процеси та підвищити ефективність.",
    service: "Автоматизація бізнес-процесів",
    message: "Цікавлюся автоматизацією бізнес-процесів для підвищення ефективності."
  },
  [ServiceType.WebDevelopment]: {
    title: "Консультація з веб-розробки",
    description: "Обговоримо ваш веб-проект та найкращі рішення для його реалізації.",
    service: "Веб-розробка",
    message: "Хочу обговорити розробку веб-додатку або сайту."
  },
  [ServiceType.MobileDevelopment]: {
    title: "Консультація з мобільної розробки",
    description: "Створимо план розробки вашого мобільного додатку.",
    service: "Мобільна розробка",
    message: "Цікавлюся розробкою мобільного додатку."
  },
  [ServiceType.Custom]: {
    title: "Отримати консультацію",
    description: "Заповніть форму, і ми зв'яжемося з вами для обговорення деталей.",
    service: "Консультація",
    message: "Хочу отримати консультацію щодо ваших послуг."
  }
};

export function useConsultationService() {
  const { openModal } = useModalService();

  const openConsultationForm = (serviceType: ServiceType = ServiceType.Custom, customOptions?: ConsultationOptions) => {
    const serviceConfig = SERVICE_CONFIGS[serviceType];
    
    return openModal(ModalKey.ConsultationForm, {
      title: customOptions?.title || serviceConfig.title,
      description: customOptions?.description || serviceConfig.description,
      prefill: {
        service: customOptions?.service || serviceConfig.service,
        message: customOptions?.message || serviceConfig.message,
      },
    });
  };

  const openAIAnalyticsConsultation = (options?: ConsultationOptions) => {
    return openConsultationForm(ServiceType.AIAnalytics, options);
  };

  const openAutomationsConsultation = (options?: ConsultationOptions) => {
    return openConsultationForm(ServiceType.Automations, options);
  };

  const openWebDevelopmentConsultation = (options?: ConsultationOptions) => {
    return openConsultationForm(ServiceType.WebDevelopment, options);
  };

  const openMobileDevelopmentConsultation = (options?: ConsultationOptions) => {
    return openConsultationForm(ServiceType.MobileDevelopment, options);
  };

  return {
    // Generic method
    openConsultationForm,
    // Service-specific convenience methods
    openAIAnalyticsConsultation,
    openAutomationsConsultation,
    openWebDevelopmentConsultation,
    openMobileDevelopmentConsultation,
    // Constants for external usage
    ServiceType,
  };
}
