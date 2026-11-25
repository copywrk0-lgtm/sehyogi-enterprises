export const site = {
  brand: "Sehyogi Enterprises",
  phone: "+91 98970 39429",
  phoneHref: "tel:+919897039429",
  whatsapp: "919897039429",
  email: "sehyogienterprises@gmail.com",
  city: "Bareilly, Uttar Pradesh",
  address: "63 Avas Vikas Shopping Complex, in front of SBI, Rajendra Nagar, Bareilly, UP 243122",
  vendorCode: "BRY2211290200",
  sources: {
    upneda: "https://upnedasolarrooftopportal.com/Approved-Firms",
    utl: "https://www.upsinverter.com/utl/bareily/"
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? ""
} as const;
