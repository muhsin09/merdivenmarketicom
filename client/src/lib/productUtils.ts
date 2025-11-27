import type { Product } from "@/types/product";
import i18n from "@/i18n";

let cachedCommonFeatures: { tr: string[]; en: string[] } | null = null;

/**
 * Ortak features'ları yükler ve cache'ler
 */
async function loadCommonFeatures(): Promise<{ tr: string[]; en: string[] }> {
  if (cachedCommonFeatures) {
    return cachedCommonFeatures;
  }

  try {
    const [trFeatures, enFeatures] = await Promise.all([
      fetch("/data/common-features-tr.json").then((res) => res.json()),
      fetch("/data/common-features-en.json").then((res) => res.json()),
    ]);

    cachedCommonFeatures = { tr: trFeatures, en: enFeatures };
    return cachedCommonFeatures;
  } catch (error) {
    console.error("Error loading common features:", error);
    return { tr: [], en: [] };
  }
}

/**
 * Ürün features'larını ortak features ile birleştirir
 */
export async function mergeProductFeatures(product: Product): Promise<Product> {
  const commonFeatures = await loadCommonFeatures();
  const currentLanguage = i18n.language || "tr";
  const language = currentLanguage === "en" ? "en" : "tr";
  
  const mergedFeatures = [
    ...commonFeatures[language],
    ...product.features, // Ürüne özel features
  ];

  return {
    ...product,
    features: mergedFeatures,
  };
}

/**
 * Ürün listesindeki tüm ürünlerin features'larını birleştirir
 */
export async function mergeProductsFeatures(products: Product[]): Promise<Product[]> {
  const commonFeatures = await loadCommonFeatures();
  const currentLanguage = i18n.language || "tr";
  const language = currentLanguage === "en" ? "en" : "tr";

  return products.map((product) => ({
    ...product,
    features: [
      ...commonFeatures[language],
      ...product.features, // Ürüne özel features
    ],
  }));
}

