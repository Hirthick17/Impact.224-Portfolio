The Pricing.tsx file has a critical bug where variables are referenced before being defined.

## Current State
Lines 128 and 130 reference `pricingDataFromCMS` and `pricingDataFromDefault` but they're not defined anywhere.

## Fix Needed
After line 122 (`const cmsData = useCMSContent<PricingPageData>('pricing');`), add these two lines:

```typescript
const pricingDataFromCMS = buildPricingDataFromCMS(cmsData);
const pricingDataFromDefault = buildPricingDataFromCMS(defaultPricingData);
```

This will define the variables before they're used in the validation logic on lines 128-130.
