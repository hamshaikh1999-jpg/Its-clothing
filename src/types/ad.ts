export type AdFormat = '1:1' | '9:16' | '4:5' | '1.91:1';

export type AdStyle = 'editorial' | 'streetwear' | 'sale_promo' | 'minimal_luxe';

export type MockupPlatform = 'instagram_feed' | 'instagram_story' | 'facebook_feed' | 'raw_creative';

export interface AdCreativeData {
  id: string;
  name: string;
  brandName: string;
  tagline: string;
  headline: string;
  subheadline: string;
  highlightBadge: string;
  pricePKR: string;
  originalPricePKR: string;
  discountText: string;
  primaryColor: string; // Olive
  accentColor: string;  // Red
  secondaryColor: string; // Forest Green
  textColor: string;    // White
  imageUrl: string;
  modelType: string;
  adStyle: AdStyle;
  callToAction: string;
  cityTarget: string; // "Lahore · Karachi · Islamabad"
  codGuarantee: string; // "Cash on Delivery Available"
}

export interface AdCopyTemplate {
  id: string;
  title: string;
  angle: string;
  primaryText: string;
  headline: string;
  description: string;
  recommendedCTA: string;
  targetAudience: string;
}

export interface FormatSpec {
  format: AdFormat;
  label: string;
  aspectRatio: string;
  pixelWidth: number;
  pixelHeight: number;
  bestFor: string;
  metaRecommendation: string;
}
