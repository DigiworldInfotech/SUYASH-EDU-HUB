export interface Branch {
  name: string;
  address: string;
  mapUrl: string;
  directionsUrl: string;
  phone: string;
  reviewsUrl: string;
  whatsapp: string;
  photos360?: string;
  gallery?: string[];
}

export interface Course {
  title: string;
  description: string;
  boards: string[];
  grades: string;
  medium: string;
}

export const BRANCHES: Branch[] = [
  {
    name: "Gangapur Road Branch",
    address: "Manik Colony, Uday Nagar (near Shahid Circle), Near Shree Swami Samarth Kendra, Main Gangapur Road, Nashik – 422013",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.87654321!2d73.7654321!3d20.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAwJzQ0LjQiTiA3M8KwNDUnNTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890",
    directionsUrl: "https://maps.app.goo.gl/pMjCr2smzMBLuzHV8",
    phone: "+91 92251 35236",
    reviewsUrl: "https://g.page/r/CZ4AHL9JTQkaEBM/review",
    whatsapp: "919225135236",
    photos360: "https://www.google.com/maps/embed?pb=!4v1712374800000!6m8!1m2!1sCAoSLEFGMVFpcE96Z0Z6Z0Z6Z0Z6Z0Z6Z0Z6Z0Z6Z0Z6Z0Z6Z0Z6Z0Z6Z0Z6!2y0!3f0!4f0!5f0.7820865974627469",
    gallery: [
      "https://picsum.photos/seed/gangapur1/800/600",
      "https://picsum.photos/seed/gangapur2/800/600",
      "https://picsum.photos/seed/gangapur3/800/600",
      "https://picsum.photos/seed/gangapur4/800/600"
    ]
  },
  {
    name: "Indira Nagar Branch",
    address: "Kashinath Complex (near Saptashrungi Mithai & Farshan), Near Shree Saptashrungi Mandir and Rathchakra Chowk, Indira Nagar, Nashik – 422009",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.54321!2d73.7876543!3d19.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzE1LjYiTiA3M8KwNDcnMTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890",
    directionsUrl: "https://maps.app.goo.gl/dqzyvSRnghskUm2a8",
    phone: "+91 77967 19354",
    reviewsUrl: "https://g.page/r/CbcriYz0xbZmEBM/review",
    whatsapp: "917796719354",
    photos360: "https://www.google.com/maps/embed?pb=!4v1712374800000!6m8!1m2!1sCAoSLEFGMVFpcE96Z0Z6Z0Z6Z0Z6Z0Z6Z0Z6Z0Z6Z0Z6Z0Z6Z0Z6Z0Z6Z0Z6!2y0!3f0!4f0!5f0.7820865974627469",
    gallery: [
      "https://picsum.photos/seed/indira1/800/600",
      "https://picsum.photos/seed/indira2/800/600",
      "https://picsum.photos/seed/indira3/800/600",
      "https://picsum.photos/seed/indira4/800/600"
    ]
  }
];

export const COURSES: Course[] = [
  {
    title: "Primary Section",
    description: "Building strong foundations in core subjects with interactive learning and personalized attention.",
    boards: ["SSC", "CBSE", "ICSE", "IGCSE"],
    grades: "1st to 4th Std",
    medium: "English & Semi-English"
  },
  {
    title: "Secondary Section",
    description: "Focused academic preparation with regular testing, conceptual clarity, and expert faculty.",
    boards: ["SSC", "CBSE", "ICSE", "IGCSE"],
    grades: "5th to 8th Std",
    medium: "English & Semi-English"
  },
  {
    title: "Board Preparation",
    description: "Intensive coaching for board exams with mock tests, dedicated doubt-solving, and proven results.",
    boards: ["SSC", "CBSE", "ICSE", "IGCSE"],
    grades: "9th & 10th Std",
    medium: "English & Semi-English"
  }
];

export const BUSINESS_INFO = {
  email: "suyasheduhub6@gmail.com",
  phone: "+91 92251 35236",
  whatsapp: "919225135236",
  gstNo: "27XXXXX0000X1Z1",
  udhyamAdhar: "UDYAM-MH-23-0381736",
  workingHours: "10:00 AM - 08:00 PM",
  workingDays: "Monday - Saturday",
  social: {
    facebook: "https://www.facebook.com/suyasheduhubnashik",
    instagram: "https://www.instagram.com/suyash_eduhub",
    youtube: "https://www.youtube.com/@SuyashEduHub",
    linkedin: "https://www.linkedin.com/in/suyash-edu-hub-5b47463b8/",
    pinterest: "https://www.pinterest.com/suyasheduhub"
  },
  googleSheetUrl: "https://docs.google.com/spreadsheets/d/1_pb5g6OyLJa258V0iIleXtdaGOMU9IuEzF6fkOTyiig/edit?usp=sharing"
};

