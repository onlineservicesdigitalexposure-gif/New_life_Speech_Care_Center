import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    nav: {
                        home: "Home",
                        about: "About Therapist",
                        services: "Services",
                        appointment: "Book Appointment",
                        contact: "Contact"
                    },
                    about: {
                        title: "About The Therapist",
                        subtitle: "Expert care tailored to your unique needs.",
                        missionTitle: "Our Mission",
                        missionDesc: "Helping individuals communicate confidently and improving quality of life through expert speech therapy.",
                        philosophyTitle: "Philosophy of Care",
                        philosophyDesc: "We believe in a patient-centered approach where therapy is not just about correction, but about empowerment. Every individual deserves a voice, and we are dedicated to finding the right path for each person.",
                        therapistName: "Mrs. Rita Chatterjee",
                        therapistRole: "Audiologist & Speech Language Pathologist",
                        therapistCert: "RCI Certified (Reg No: A60374)",
                        therapistExp: "With years of dedicated clinical practice, Mrs. Chatterjee brings a wealth of experience in diagnosing and treating a wide range of communication disorders. Her expertise spans from pediatric speech delays to adult neurological rehabilitation.",
                        qualifications: ["Audiologist & Speech Language Pathologist", "RCI Registered (A60374)"]
                    },
                    services: {
                        title: "Our Services",
                        subtitle: "Comprehensive speech and language therapy solutions.",
                        intro: "Speech and language therapy is a clinical field focused on the diagnosis and treatment of communication disorders. We offer a wide range of services to help individuals improve their communication skills and quality of life.",
                        childrenTitle: "Services for Children",
                        adultTitle: "Services for Adults",
                        child: {
                            delay: { title: "Speech Delay", desc: "Helping children who are not meeting speech milestones catch up with their peers." },
                            autism: { title: "Autism Spectrum Disorder", desc: "Communication strategies tailored for social interaction and language development." },
                            adhd: { title: "ADHD", desc: "Therapy to improve focus, listening skills, and structured communication." },
                            articulation: { title: "Articulation Disorders", desc: "Correcting sound production errors to make speech clear and understandable." },
                            stammering: { title: "Stammering", desc: "Techniques to improve fluency and build confidence in speaking." },
                            hearing: { title: "Hearing Impairment", desc: "Therapy to help children with hearing loss develop spoken language skills." }
                        },
                        adult: {
                            aphasia: { title: "Aphasia", desc: "Language recovery therapy for individuals who have suffered a stroke or brain injury." },
                            dysarthria: { title: "Dysarthria", desc: "Strengthening speech muscles to improve articulation and volume." },
                            voice: { title: "Voice Disorders", desc: "Treatment for hoarseness, vocal nodules, and other voice quality issues." },
                            swallowing: { title: "Swallowing Disorders", desc: "Safe swallowing strategies and exercises for dysphagia management." }
                        }
                    },
                    appointment: {
                        title: "Book an Appointment",
                        subtitle: "Take the first step towards better communication.",
                        reassurance: "Your consultation includes a private and confidential assessment with our specialist.",
                        form: {
                            name: "Full Name",
                            phone: "Phone Number",
                            email: "Email Address",
                            concern: "Concern / Condition",
                            date: "Preferred Date",
                            time: "Preferred Time",
                            submit: "Confirm Appointment",
                            success: "Thank you! We have received your request and will contact you shortly."
                        },
                        contact: {
                            call: "Call Us Directly",
                            whatsapp: "Chat on WhatsApp"
                        }
                    },
                    contact: {
                        title: "Contact Us",
                        subtitle: "We are here to answer your questions.",
                        infoTitle: "Contact Information",
                        addressLine1: "38, Garia Station Road",
                        addressLine2: "Behind Bank of Maharashtra",
                        addressLine3: "Kolkata – 700084",
                        phoneMain: "9330222020",
                        phoneAlt: "8777877372",
                        email: "newlifespeechcarecentre@gmail.com",
                        hours: "Clinic Timing",
                        hoursDesc: "Mon - Sat: 10:00 AM - 8:00 PM",
                        mapTitle: "Find Us",
                        formTitle: "Send us a Message",
                        message: "Message",
                        send: "Send Message"
                    },
                    hero: {
                        title: "Helping Children and Adults Find Their Voice",
                        subtitle: "Professional Speech & Language Therapy",
                        cta: "Book Appointment",
                        call: "Call Now"
                    },
                    home: {
                        therapistTitle: "Meet Our Specialist",
                        therapistName: "Mrs. Rita Chatterjee",
                        therapistRole: "Audiologist & Speech Language Pathologist",
                        therapistCert: "RCI Certified",
                        therapistDesc: "Dedicated to improving communication skills with personalized care and evidence-based practices.",
                        servicesTitle: "Our Services",
                        servicesChildren: "For Children",
                        servicesAdults: "For Adults",
                        childServices: ["Speech Delay", "Autism Spectrum Disorder", "ADHD", "Stammering", "Articulation Disorders", "Hearing Impairment"],
                        adultServices: ["Aphasia", "Dysarthria", "Voice Disorders", "Swallowing Disorders"],
                        processTitle: "How Therapy Works",
                        processStep1: "Assessment",
                        processStep1Desc: "Comprehensive evaluation of speech and language needs.",
                        processStep2: "Personalized Therapy",
                        processStep2Desc: "Customized treatment plan tailored to individual goals.",
                        processStep3: "Progress Monitoring",
                        processStep3Desc: "Regular tracking and adjustment of therapy goals.",
                        aptTitle: "Book an Appointment",
                        aptName: "Name",
                        aptPhone: "Phone",
                        aptConcern: "Concern",
                        aptSubmit: "Submit Request"
                    },
                    common: {
                        loading: "Loading...",
                        language: "Language"
                    }
                }
            },
            bn: {
                translation: {
                    nav: {
                        home: "হোম",
                        about: "থেরাপিস্ট সম্পর্কে",
                        services: "সেবাসমূহ",
                        appointment: "অ্যাপয়েন্টমেন্ট",
                        contact: "যোগাযোগ"
                    },
                    about: {
                        title: "থেরাপিস্ট সম্পর্কে",
                        subtitle: "আপনার প্রয়োজন অনুযায়ী বিশেষজ্ঞ যত্ন।",
                        missionTitle: "আমাদের লক্ষ্য",
                        missionDesc: "ব্যক্তিদের আত্মবিশ্বাসের সাথে যোগাযোগ করতে এবং বিশেষজ্ঞ স্পিচ থেরাপির মাধ্যমে জীবনযাত্রার মান উন্নত করতে সাহায্য করা।",
                        philosophyTitle: "সেবা দর্শন",
                        philosophyDesc: "আমরা একটি রোগী-কেন্দ্রিক দৃষ্টিভঙ্গিতে বিশ্বাস করি যেখানে থেরাপি কেবল সংশোধনের বিষয় নয়, বরং ক্ষমতায়নের বিষয়। প্রতিটি ব্যক্তির একটি কণ্ঠস্বর পাওয়ার অধিকার আছে, এবং আমরা প্রতিটি ব্যক্তির জন্য সঠিক পথ খুঁজে পেতে নিবেদিত।",
                        therapistName: "মিসেস রিতা চ্যাটার্জি",
                        therapistRole: "অডিওলজিস্ট এবং স্পিচ ল্যাঙ্গুয়েজ প্যাথলজিস্ট",
                        therapistCert: "আরসিআই সার্টিফাইড (Reg No: A60374)",
                        therapistExp: "দীর্ঘ বছরের অনুশীলনের সাথে, মিসেস চ্যাটার্জি বিভিন্ন যোগাযোগ ব্যাধি নির্ণয় এবং চিকিত্সার ক্ষেত্রে প্রচুর অভিজ্ঞতা নিয়ে এসেছেন। তার দক্ষতা শিশুদের কথা বলার বিলম্ব থেকে শুরু করে প্রাপ্তবয়স্কদের স্নায়বিক পুনর্বাসন পর্যন্ত বিস্তৃত।",
                        qualifications: ["অডিওলজিস্ট এবং স্পিচ ল্যাঙ্গুয়েজ প্যাথলজিস্ট", "আরসিআই নিবন্ধিত (A60374)"]
                    },
                    services: {
                        title: "আমাদের সেবাসমূহ",
                        subtitle: "সম্পূর্ণ স্পিচ এবং ল্যাঙ্গুয়েজ থেরাপি সমাধান।",
                        intro: "স্পিচ এবং ল্যাঙ্গুয়েজ থেরাপি একটি ক্লিনিকাল ক্ষেত্র যা যোগাযোগ ব্যাধি নির্ণয় এবং চিকিত্সার উপর দৃষ্টি নিবদ্ধ করে। আমরা সব বয়সের ব্যক্তিদের কার্যকর যোগাযোগ দক্ষতা বিকাশে সাহায্য করি।",
                        childrenTitle: "শিশুদের জন্য সেবাসমূহ",
                        adultTitle: "প্রাপ্তবয়স্কদের জন্য সেবাসমূহ",
                        child: {
                            delay: { title: "বক্তৃতা বিলম্ব (Speech Delay)", desc: "যেসব শিশু কথার মাইলস্টোন পূরণ করছে না তাদের সাহায্য করা।" },
                            autism: { title: "উচ্চারণজনিত সমস্যা (Autism Spectrum Disorder)", desc: "সামাজিক মিথস্ক্রিয়া এবং ভাষা বিকাশের জন্য যোগাযোগ কৌশল।" },
                            adhd: { title: "ADHD", desc: "মনোননিবেশ, শোনার দক্ষতা এবং কাঠামোগত যোগাযোগ উন্নত করার থেরাপি।" },
                            articulation: { title: "Articulation Disorders", desc: "কথা স্পষ্ট এবং বোধগম্য করার জন্য শব্দ উৎপাদনের ত্রুটি সংশোধন করা।" },
                            stammering: { title: "তোতলামি (Stammering)", desc: "সাবলীলতা উন্নত করা এবং কথা বলার আত্মবিশ্বাস তৈরি করার কৌশল।" },
                            hearing: { title: "শ্রবণ প্রতিবন্ধকতা (Hearing Impairment)", desc: "শ্রবণশক্তিহীন শিশুদের কথা বলার দক্ষতা বিকাশে সহায়তা করা।" }
                        },
                        adult: {
                            aphasia: { title: "Aphasia", desc: "স্ট্রোক বা মস্তিষ্কের আঘাতের রোগীদের জন্য ভাষা পুনরুদ্ধারের থেরাপি।" },
                            dysarthria: { title: "Dysarthria", desc: "স্পষ্ট উচ্চারণ এবং ভলিউম উন্নত করার জন্য বাক পেশী শক্তিশালী করা।" },
                            voice: { title: "Voice Disorders", desc: "কণ্ঠস্বর ভেঙে যাওয়া, ভোকাল নোডুলস এবং অন্যান্য ভয়েস মানের সমস্যার চিকিৎসা।" },
                            swallowing: { title: "Swallowing Disorders", desc: "নিরাপদে গিলে ফেলার কৌশল এবং ডিসফেজিয়া ব্যবস্থাপনার ব্যায়াম।" }
                        }
                    },
                    appointment: {
                        title: "অ্যাপয়েন্টমেন্ট বুক করুন",
                        subtitle: "ভাল যোগাযোগের দিকে প্রথম পদক্ষেপ নিন।",
                        reassurance: "আপনার পরামর্শে আমাদের বিশেষজ্ঞের সাথে একটি ব্যক্তিগত এবং গোপনীয় মূল্যায়ন অন্তর্ভুক্ত রয়েছে।",
                        form: {
                            name: "পুরো নাম",
                            phone: "ফোন নম্বর",
                            email: "ইমেল ঠিকানা",
                            concern: "সমস্যা / অবস্থা",
                            date: "পছন্দের তারিখ",
                            time: "পছন্দের সময়",
                            submit: "অ্যাপয়েন্টমেন্ট নিশ্চিত করুন",
                            success: "ধন্যবাদ! আমরা আপনার অনুরোধ পেয়েছি এবং শীঘ্রই আপনার সাথে যোগাযোগ করব।"
                        },
                        contact: {
                            call: "সরাসরি কল করুন",
                            whatsapp: "হোয়াটসঅ্যাপে চ্যাট করুন"
                        }
                    },
                    contact: {
                        title: "যোগাযোগ করুন",
                        subtitle: "আমরা আপনার প্রশ্নের উত্তর দিতে এখানে আছি।",
                        infoTitle: "যোগাযোগের তথ্য",
                        addressLine1: "৩৮, গড়িয়া স্টেশন রোড",
                        addressLine2: "ব্যাঙ্ক অফ মহারাষ্ট্রের পিছনে",
                        addressLine3: "কলকাতা – ৭০০০৮৪",
                        phoneMain: "9330222020",
                        phoneAlt: "8777877372",
                        email: "newlifespeechcarecentre@gmail.com",
                        hours: "ক্লিনিক খোলার সময়",
                        hoursDesc: "সোম - শনি: সকাল ১০:০০ - রাত ৮:০০",
                        mapTitle: "আমাদের অবস্থান",
                        formTitle: "বার্তা পাঠান",
                        message: "বার্তা",
                        send: "বার্তা পাঠান"
                    },
                    hero: {
                        title: "শিশু এবং প্রাপ্তবয়স্কদের তাদের কণ্ঠস্বর খুঁজে পেতে সাহায্য করা",
                        subtitle: "পেশাদার স্পিচ এবং ল্যাঙ্গুয়েজ থেরাপি",
                        cta: "অ্যাপয়েন্টমেন্ট বুক করুন",
                        call: "এখনই কল করুন"
                    },
                    home: {
                        therapistTitle: "আমাদের বিশেষজ্ঞের সাথে পরিচিত হন",
                        therapistName: "মিসেস রিতা চ্যাটার্জি",
                        therapistRole: "অডিওলজিস্ট এবং স্পিচ ল্যাঙ্গুয়েজ প্যাথলজিস্ট",
                        therapistCert: "আরসিআই সার্টিফাইড",
                        therapistDesc: "ব্যক্তিগত যত্ন এবং প্রমাণ-ভিত্তিক অনুশীলনের সাথে যোগাযোগ দক্ষতা উন্নত করতে নিবেদিত।",
                        servicesTitle: "আমাদের সেবাসমূহ",
                        servicesChildren: "শিশুদের জন্য",
                        servicesAdults: "প্রাপ্তবয়স্কদের জন্য",
                        childServices: ["Speech Delay", "Autism Spectrum Disorder", "ADHD", "Stammering", "Articulation Disorders", "Hearing Impairment"],
                        adultServices: ["Aphasia", "Dysarthria", "Voice Disorders", "Swallowing Disorders"],
                        processTitle: "কিভাবে থেরাপি কাজ করে",
                        processStep1: "মূল্যায়ন",
                        processStep1Desc: "বক্তৃতা এবং ভাষার চাহিদগুলোর ব্যাপক মূল্যায়ন।",
                        processStep2: "ব্যক্তিগতকৃত থেরাপি",
                        processStep2Desc: "ব্যক্তিগত লক্ষ্য অনুযায়ী কাস্টমাইজড চিকিৎসা পরিকল্পনা।",
                        processStep3: "অগ্রগতি পর্যবেক্ষণ",
                        processStep3Desc: "থেরাপির লক্ষ্যগুলির নিয়মিত ট্র্যাকিং এবং সামঞ্জস্য।",
                        aptTitle: "অ্যাপয়েন্টমেন্ট বুক করুন",
                        aptName: "নাম",
                        aptPhone: "ফোন",
                        aptConcern: "সমস্যা",
                        aptSubmit: "অনুরোধ জমা দিন"
                    },
                    common: {
                        loading: "লোড হচ্ছে...",
                        language: "ভাষা"
                    }
                }
            }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
