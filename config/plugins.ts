export default ({ env }) => ({
  i18n: {
    enabled: true,
    config: {
      locales: ['en', 'uk', "it", "de", "ar-eg", "ru", "et"],
      defaultLocale: 'en',
    },
  },

  translate: {
    enabled: true,
    config: {
      // назва провайдера: 'deepl', 'libretranslate', 'google', 'custom-api' і т.д.
      provider: 'deepl',
      providerOptions: {
        apiKey: env('DEEPL_API_KEY'),
        apiUrl: env('DEEPL_API_URL', 'https://api-free.deepl.com'),
      },
      translatedFieldTypes: [
        'string',
        { type: 'blocks', format: 'jsonb' },
        { type: 'text', format: 'plain' },
        { type: 'richtext', format: 'markdown' },
        'component',
        'dynamiczone',
      ],
      translateRelations: true,
    },
  },
});
