import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Nav, } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import css from '../assets/css/style.css';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';

const Pricing = () => {
    const PackagesList = [
        {
            mainHeading: "Startup Website",
            mainPrice: 160.99,
            strikePrice: 320.99,
            listing: [
                '3 Stock Photos',
                '3 Banner Design',
                '1 Page Static Website',
                '1 jQuery Slider Banner',
                'FREE Google Friendly Sitemap',
                'Complete W3C Certified HTML',
                '48 to 72 hours TAT',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                'Mobile Responsive will be Additional $99*',
                'CMS will be Additional $149*'
            ]
        },
        {
            mainHeading: "Entrepreneur Website",
            mainPrice: 1099.99,
            strikePrice: 2199.99,
            listing: [
                '8 Unique Pages Website',
                'CMS / Admin Panel Support',
                '8 Stock images',
                '5 Banner Designs',
                '1 jQuery Slider Banner',
                'FREE Google Friendly Sitemap',
                'Complete W3C Certified HTML',
                '48 to 72 hours TAT',
                'Complete Deployment',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                'Money Back Guarantee*',
                'Mobile Responsive will be Additional $99*'
            ]
        },
        {
            mainHeading: "Business Plus Website",
            mainPrice: 2198.99,
            strikePrice: 4398.98,
            listing: [
                'Conceptual and Dynamic Website',
                'Mobile Responsive',
                'Online Reservation/Appointment Tool (Optional)',
                'Online Payment Integration (Optional)',
                'Custom Forms',
                'Lead Capturing Forms (Optional)',
                'Striking Hover Effects',
                'Newsletter Subscription (Optional)',
                'Newsfeed Integration',
                'Social Media Integration',
                'Facebook Page Design',
                'Twitter Page Design',
                'YouTube Page Design',
                'Search Engine Submission',
                '5 Stock Photos',
                '3 Unique Banner Design',
                '1 jQuery Slider Banner',
                'Complete W3C Certified HTML',
                '48 to 72 hours TAT',
                'Complete Deployment',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                'Money Back Guarantee*'
            ]
        },
        {
            mainHeading: "Custom WordPress Website",
            mainPrice: 1759.98,
            strikePrice: 3615.97,
            listing: [
                'Custom Made, Interactive, Dynamic & High End Design',
                'Mobile Responsive Design',
                'Custom WordPress CMS',
                'Content Management System (CMS)',
                'Online Appointment/Scheduling/Online Ordering Integration (Optional)',
                'Online Payment Integration (Optional)',
                'Multi Lingual (Optional)',
                'Custom Dynamic Forms (Optional)',
                'Signup Area (For Newsletters, Offers etc.)',
                'Website Search Bar',
                '1 jQuery Slider Banner',
                'Up to 10 Custom Made Banner Designs',
                '10 Stock Images',
                'Unlimited Revisions',
                'Special Hoover Effects',
                'Live Feeds of Social Networks integration (Optional)',
                'Facebook Page Design',
                'Twitter Page Design',
                'YouTube Page Design',
                '48 to 72 Hours Initial TAT',
                'FREE 3 Years Domain Name',
                'Free Google Friendly Sitemap',
                'Search Engine Submission',
                'Complete W3C Certified HTML',
                'Industry Specified Team of Expert Designers and Developers',
                'Complete Deployment',
                'Dedicated Accounts Manager',
                '100% Ownership Rights',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                'Money Back Guarantee*'
            ]
        },
        {
            mainHeading: "Custom PHP Website",
            mainPrice: 2749.98,
            strikePrice: 5499.97,
            listing: [
                'Custom Made, Interactive, Dynamic & High End Design',
                'Mobile Responsive Design',
                'Custom PHP CMS Development',
                'Content Management System (CMS)',
                'Online Appointment/Scheduling/Online Ordering Integration (Optional)',
                'Online Payment Integration (Optional)',
                'Multi Lingual (Optional)',
                'Custom Dynamic Forms (Optional)',
                'Signup Area (For Newsletters, Offers etc.)',
                'Separate Client login/signup Area',
                'Website Search Bar',
                '1 jQuery Slider Banner',
                'Up to 10 Custom Made Banner Designs',
                '10 Stock Images',
                'Unlimited Revisions',
                'Special Hoover Effects',
                'Live Feeds of Social Networks integration (Optional)',
                'Free Google Friendly Sitemap',
                'Complete W3C Certified HTML',
                'Industry Specified Team of Expert Designers and Developers',
                'Dedicated Accounts Manager',
                'Complete Deployment',
                '100% Ownership Rights',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                'Money Back Guarantee*'
            ]
        },
        {
            mainHeading: "Custom Automated Website Portal",
            mainPrice: 5499.98,
            strikePrice: 11000,
            listing: [
                'Custom Made, Interactive, Dynamic & High End Design',
                'Mobile Responsive Design',
                'Unique Pages and UI Design',
                'Custom Content Management System (CMS)',
                'Complete Custom Development',
                'Key features',
                'Process Automation Tools',
                'Automated Course Creation',
                'Video Conferencing',
                'Skills/Certification Tracking',
                'Mobile Learning',
                'Asynchronous Learning',
                'CRM Features',
                'Gamification (Optional)',
                'Social Learning/Message Boards',
                'Motivational Triggers',
                'Forums And Webinars',
                'E-commerce And Subscriptions',
                'Online Course Booking',
                'Excellent Reporting',
                'Invoicing Integration',
                'Financial Integrations',
                'Student Information Management',
                'Automated communications',
                'Learning Management System',
                'Quick And Easy Course Scheduling',
                'Reporting And Data Analysis',
                'Assessment Management & Live Feedback',
                'Quick User Integration',
                'Separate login/signup page',
                'Easy Payment Methods',
                'Online Communities & Social Engagement',
                'Curation of Resources And Adding Own Resources',
                'Value Added Services',
                'Newsfeed Integration',
                'Social Media Plugins Integration',
                'Social Media Page Designs (Facebook, Twitter, Instagram)',
                'Upto 40 Stock images',
                '10 Unique Banner Designs',
                'JQuery Slider',
                'Free Google Friendly Sitemap',
                'Complete W3C Certified HTML',
                'Industry Specified Team of Expert Designers and Developers',
                'Dedicated Accounts Manager',
                'Complete Deployment',
                '100% Ownership Rights',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                'Money Back Guarantee*'
            ]
        }
    ]
    const EcommerceList = [
        {
            mainHeading: "Beginners Ecommerce Website",
            mainPrice: 1099.9,
            strikePrice: 2199.9,
            listing: [
                'Conceptual and Dynamic Website',
                'Mobile Responsive',
                'Content Management System (CMS)',
                'Easy Product Search',
                'Product Reviews',
                'Up To 100 Products',
                'Up To 7 Categories',
                'Full Shopping Cart Integration',
                'Payment Module Integration',
                'Jquery Slider',
                'Free Google Friendly Sitemap',
                'Complete W3C Certified HTML',
                'Facebook Page Design',
                'Twitter Page Design',
                'YouTube Page Design',
                'Industry Specified Team of Expert Designers and Developers',
                'Dedicated Accounts Manager',
                'Complete Deployment',
                '100% Ownership Rights',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                'Money Back Guarantee*'
            ]
        },
        {
            mainHeading: "Professional Ecommerce Website",
            mainPrice: 1319.9,
            strikePrice: 2640,
            listing: [
                'Conceptual and Dynamic Website',
                'Content Management System (CMS)',
                'Mobile Responsive Design',
                'Easy Product Search',
                'Product Reviews',
                'Upto 250 Products',
                'Upto 15 Categories',
                'Full Shopping Cart Integration',
                'Payment Module Integration',
                'Sales & Inventory Management',
                'Jquery Slider',
                'Free Google Friendly Sitemap',
                'Complete W3C Certified HTML',
                'Facebook Page Design',
                'Twitter Page Design',
                'YouTube Page Design',
                'Industry Specified Team of Expert Designers and Developers',
                'Dedicated Accounts Manager',
                'Complete Deployment',
                '100% Ownership Rights',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                'Money Back Guarantee*'
            ]
        },
        {
            mainHeading: "Corporate Ecommerce Website",
            mainPrice: 1594.98,
            strikePrice: 3190,
            listing: [
                'Conceptual and Dynamic Website',
                'Content Management System (CMS)',
                'Mobile Responsive Design',
                'WooCommerce or Shopify Based Backend',
                'Easy Product Search',
                'Product Reviews',
                'Upto 300 Products',
                'Upto 30 Categories',
                'Full Shopping Cart Integration',
                'Payment Module Integration',
                'Sales & Inventory Management',
                'Jquery Slider',
                'Free Google Friendly Sitemap',
                'Complete W3C Certified HTML',
                'Facebook Page Design',
                'Twitter Page Design',
                'YouTube Page Design',
                'Industry Specified Team of Expert Designers and Developers',
                'Dedicated Accounts Manager',
                'Complete Deployment',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                'Money Back Guarantee*'
            ]
        },
        {
            mainHeading: "Elite Ecommerce Website",
            mainPrice: 4068.9,
            strikePrice: 8249.98,
            listing: [
                'Custom E-Commerce Store Design',
                'Mobile Responsive Design',
                'Custom PHP Backend CMS',
                'User Friendly Content Management System',
                'Product Detail Page Design',
                'Featured Products Showcase',
                'Full Shopping Cart Integration',
                'Upto 750 Products',
                'Unlimited Categories',
                'Product Rating & Reviews',
                'Easy Product Search',
                'Payment Gateway Integration',
                'Multi-currency Support',
                'Cutomer Log-in Area',
                'Tell a Friend Feature',
                'Social Media Plugins Integration',
                'Social Media Pages',
                'Facebook , Twitter, YouTube, Google+ & Pinterest Page Designs',
                'Value Added Services',
                'Dedicated Account Manager',
                'UNLIMITED Revisions',
                'All Final File Formats',
                'Unique Banner Slider',
                'Free Logo Design',
                'UNLIMITED Logo Design Concepts',
                'By 6 Award Winning Designers',
                'Icon Design',
                'UNLIMITED Revisions',
                'Free Print Media Designs',
                'Stationary Design',
                'Invoice Design, Email Signature',
                'Bi-Fold Brochure (OR) 2 Sided Flyer Design',
                'Product Catalog Design',
                'Sign age Design (OR) Label Design',
                'T-Shirt Design (OR) Car Wrap Design',
                'Free Google Friendly Sitemap',
                'Industry Specified Team of Expert Designers and Developers',
                'Dedicated Accounts Manager',
                'Complete Deployment',
                '100% Ownership Rights',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                'Money Back Guarantee*'
            ]
        },
        {
            mainHeading: "Automated/Interactive Ecommerce Portal",
            mainPrice: 8798.9,
            strikePrice: 17599.97,
            listing: [
                'Custom Made, Interactive, Dynamic & High End Design',
                'Unique Pages and UI Design',
                'Custom Content Management System (CMS)',
                'Complete Custom Development',
                'Process Automation Tools',
                'Automated',
                'Suppliers Integration (API NEEDED)',
                'Shipper Integration (API NEEDED)',
                'Upto 40 Stock Images',
                'Order Management',
                'LOT numbers and expire date tracking',
                'Transfer stock between warehouses',
                'Receive stock into a specific warehouse',
                'Fulfill orders from a particular warehouse ',
                'Actionable Insights',
                'Real- Time Visibility',
                'Inventory Opportunities',
                'Advanced Features',
                'Speak to suppliers during trivial conversations',
                'Machine Learning',
                'for Data Cleansing and Building Data Robustness',
                'Automated Invoices & Estimates',
                'Create beautiful, professional invoices & estimates',
                'Automated Split invoicing',
                'Automated Combine invoices',
                'Invoice templates',
                'Automated Barcode Scanning',
                'Scan inventory into your orders',
                'Locations and Zones',
                'Have multiple warehouses, offices, or retail stores?',
                'Customer Accounts',
                'Performance and analytics',
                'Customization of Personal Details',
                'Process management',
                'Sales Automation',
                'Complete Deployment',
                '100% Ownership Rights',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                'Money Back Guarantee*'
            ]
        },
        {
            mainHeading: "Business Website",
            mainPrice: 2749.98,
            strikePrice: 5499.97,
            listing: [
                '15 to 20 Pages Website',
                'Custom Made, Interactive, Dynamic &amp; High End Design',
                'Custom PHP Development',
                '1 jQuery Slider Banner',
                'Up to 10 Custom Made Banner Designs',
                '10 Stock Images',
                'Unlimited Revisions',
                'Special Hoover Effects',
                'Content Management System (CMS)',
                'Online Appointment/Scheduling/Online Ordering Integration (Optional',
                'Online Payment Integration (Optional)',
                'Multi Lingual (Optional)',
                'Custom Dynamic Forms (Optional)',
                'Signup Area (For Newsletters, Offers etc',
                'Search Bar',
                'Live Feeds of Social Networks integration (Optional',
                'Mobile Responsive',
                '15 Seconds 2D Explainer Video',
                'Voice - Over &amp; Sound Effects',
                'Professional Script Writing',
                'Storyboard',
                'SEO Meta Tags',
                'FREE 5 Years Domain Name',
                'Free Google Friendly Sitemap',
                'Search Engine Submission',
                'Complete W3C Certified HTML',
                'Industry Specified Team of Expert Designers and Developers',
                'Complete Deployment',
                'Dedicated Accounts Manager',
                '100% Ownership Rights',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                '100% Money Back Guarantee *'
            ]
        }
    ]
    const AppList = [
        {
            mainHeading: "Business Web App",
            mainPrice: 2749.98,
            strikePrice: 5499.9,
            listing: [
                'Custom Made, Interactive, Dynamic &amp; High End Design',
                'Custom WP (or) Custom PHP Development',
                '1 jQuery Slider Banner',
                'Up to 10 Custom Made Banner Designs',
                '10 Stock Images',
                'Unlimited Revisions',
                'Special Hoover Effects',
                'Content Management System (CMS)',
                'Online Appointment/Scheduling/Online Ordering Integration (Optional)',
                'Online Payment Integration (Optional',
                'Multi Lingual (Optional)',
                'Custom Dynamic Forms (Optional)',
                'Signup Area (For Newsletters, Offers etc',
                'Search Bar',
                'Live Feeds of Social Networks integration (Optional)',
                'Mobile Responsive',
                '15 Seconds 2D Explainer Video',
                'Voice - Over &amp; Sound Effects',
                'Professional Script Writing',
                'Storyboard',
                'SEO Meta Tags',
                'FREE 5 Years Domain Name',
                'Free Google Friendly Sitemap',
                'Search Engine Submission',
                'Complete W3C Certified HTML',
                'Industry Specified Team of Expert Designers and Developers',
                'Complete Deployment',
                'Dedicated Accounts Manager',
                '100% Ownership Rights',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                'Money Back Guarantee*',
            ]
        },
        {
            mainHeading: "Automated Web App",
            mainPrice: 5499.98,
            strikePrice: 11000,
            listing: [
                'Custom Content Management System (CMS)',
                'Unique Pages and UI Design',
                'Complete Custom Development',
                'Process Automation Tools',
                'Newsfeed Integration',
                'Social Media Plugins Integration',
                'Upto 40 Stock images',
                '10 Unique Banner Designs',
                'JQuery Slider',
                'Search Engine Submission',
                'Free Google Friendly Sitemap',
                'FREE 5 Years Hosting',
                'Custom Email Addresses',
                'Social Media Page Designs (Facebook, Twitter, Instagram)',
                'Complete W3C Certified HTML',
                'Complete Deployment',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                'Money Back Guarantee*',
                '<strong>Key features</strong>',
                ' Automated Course Creation',
                'Video Conferencing',
                'Skills/Certification Tracking',
                'Mobile Learning',
                'Asynchronous Learning',
                'CRM Features',
                'Gamification',
                'Social Learning/Message Boards',
                'Motivational Triggers',
                'Forums And Webinars',
                'E-commerce And Subscriptions',
                'Online Course Booking',
                'Excellent Reporting',
                'Invoicing Integration',
                'Financial Integrations',
                'Student Information management',
                'Automated communications',
                'Learning Management System',
                'Quick And Easy Course Scheduling',
                'Reporting And Data Analysis',
                'Assessment Management &amp; Live Feedback',
                'Gradebooks',
                'Quick User Integration',
                'Easy Payment Methods',
                'Online Communities &amp; Social Engagement',
                'Curation of Resources And Adding Own Resources'
            ]
        },
        {
            mainHeading: "Automated/Interactive Ecommerce Web App",
            mainPrice: 8799.98,
            strikePrice: 17599.9,
            listing: [
                'Custom Content Management System (CMS)',
                'Unique Pages and UI Design',
                'Complete Custom Development',
                'Process Automation Tools',
                'Newsfeed Integration',
                'Social Media Plugins Integration',
                'Upto 40 Stock images',
                '10 Unique Banner Designs',
                'JQuery Slider',
                'Search Engine Submission',
                'Free Google Friendly Sitemap',
                'FREE 5 Years Hosting',
                'Custom Email Addresses',
                'Social Media Page Designs (Facebook, Twitter, Instagram)',
                'Complete W3C Certified HTML',
                'Complete Deployment',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                'Money Back Guarantee*',
                '<strong>Automated Inventory/Shipping/Supplier Module:</strong>',
                'Manage thousands to millions of inventory with ease and check stock levels in real-time. Receive',
                'Suppliers Integration (API NEEDED)',
                'Shipper Integration (API NEEDED)',
                'Order management',
                'LOT numbers and expire date tracking',
                'Transfer stock between warehouses (If Warehouse - API NEEDED)',
                'Receive stock into a specific warehouse (If Warehouse - API NEEDED)',
                'Fulfill orders from a particular warehouse (If Warehouse - API NEEDD)',
                'Stock Management',
                'Actionable Insights',
                'Real- Time Visibility',
                'Inventory Opportunities',
                '<strong>Advanced Features: (API Needed For Suppliers/Warehouse)</strong>',
                'Speak to suppliers during trivial conversations.',
                'Set and send actions to suppliers regarding governance and compliance materials. Place purchasing requests.',
                'Research and answer internal questions regarding procurement functionalities or a supplier/supplier set.',
                'Receiving/filing/documentation of invoices and payments/order requests<',
                'Machine Learning (ML) for Supply Chain Planning (SCP)',
                'Machine Learning for Warehouse Management<',
                'Natural Language Processing (NLP) for Data Cleansing and Building Data Robustness',
                'Automated Split invoicing',
                'Automated Combine invoices',
                'Invoice templates',
                '<strong>Automated Barcode Scanning</strong>',
                'Scan inventory into your orders, generate barcodes for your documents, and search for inventory or documents',
                '<strong>Customer Accounts</strong>',
                'Performance and analytics',
                'Customization of Personal Details',
                'Process management',
                'Sales Automation',
                'Team Collaboration',
                'Marketing Automation',
                ' Security',
                'Integrations',
                'Mobile Notifications',
                'Sales Reports',
                'Trend Analytics',
                'Forecasting',
                'Territory Management',
                'Account Management',
                'Event Integration',
                'Advanced Data Security',
                '<strong>Purchase Orders</strong>',
                'With integrated purchase orders, you can easily replenish your inventory levels by ordering more stock and e',
                'Partial orders fulfill',
                'Backordering',
                '<strong>Financial Reports</strong>',
                'Generate extremely detailed reports for your inventory, sales and services. Filter your reports by date-r'
            ]
        },
        {
            mainHeading: "Silver Website",
            mainPrice: 1759.98,
            strikePrice: 3519.97,
            listing: [
                '15 to 20 Pages Website',
                'Custom Made, Interactive, Dynamic &amp; High End Design',
                'Custom WP',
                '1 jQuery Slider Banner',
                'Up to 10 Custom Made Banner Designs',
                '10 Stock Images',
                'Unlimited Revisions',
                'Special Hoover Effects',
                'Content Management System (CMS',
                'Online Appointment/Scheduling/Online Ordering Integration (Optional)',
                'Online Payment Integration (Optional)',
                'Multi Lingual (Optional)',
                'Custom Dynamic Forms (Optional)',
                'Signup Area (For Newsletters, Offers etc',
                'Search Bar',
                'Live Feeds of Social Networks integration (Optional)',
                'Mobile Responsive',
                'FREE 5 Years Domain Name',
                'Free Google Friendly Sitemap',
                'Search Engine Submission',
                'Complete W3C Certified HTML',
                'Industry Specified Team of Expert Designers and Developers',
                'Complete Deployment',
                'Dedicated Accounts Manager',
                'Facebook Page Design',
                'Twitter Page Design',
                'YouTube Page Design',
                '100% Ownership Rights',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                '100% Money Back Guarantee '
            ]
        },
        {
            mainHeading: "Business Website",
            mainPrice: 2749.98,
            strikePrice: 5499.97,
            listing: [
                '15 to 20 Pages Website',
                'Custom Made, Interactive, Dynamic &amp; High End Design',
                'Custom PHP Development',
                '1 jQuery Slider Banner',
                'Up to 10 Custom Made Banner Designs',
                '10 Stock Images',
                'Unlimited Revisions',
                'Special Hoover Effects',
                'Content Management System (CMS',
                'Online Appointment/Scheduling/Online Ordering Integration (Optional',
                'Online Payment Integration (Optional',
                'Multi Lingual (Optional',
                'Custom Dynamic Forms (Optional',
                'Signup Area (For Newsletters, Offers etc',
                'Search Bar',
                'Live Feeds of Social Networks integration (Optional',
                'Mobile Responsive',
                '15 Seconds 2D Explainer Video',
                'Voice - Over &amp; Sound Effects',
                'Professional Script Writing',
                'Storyboard',
                'SEO Meta Tags',
                'FREE 5 Years Domain Name',
                'Free Google Friendly Sitemap',
                'Search Engine Submission',
                'Complete W3C Certified HTML',
                'Industry Specified Team of Expert Designers and Developers',
                'Complete Deployment',
                'Dedicated Accounts Manager',
                '100% Ownership Rights',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                '100% Money Back Guarantee '
            ]
        },
        {
            mainHeading: "Automated Portal",
            mainPrice: 5499.98,
            strikePrice: 11000,
            listing: [
                'Unlimited Page Website',
                'Custom Content Management System (CMS)',
                'Unique Pages and UI Design',
                'Complete Custom Development',
                'Process Automation Tools',
                'Newsfeed Integration',
                'Social Media Plugins Integration',
                'Upto 40 Stock images',
                '10 Unique Banner Designs',
                'JQuery Slider',
                'Search Engine Submission',
                'Free Google Friendly Sitemap',
                'FREE 5 Years Hosting',
                'Custom Email Addresses',
                'Social Media Page Designs (Facebook, Twitter, Instagram)',
                'Complete W3C Certified HTML',
                'Complete Deployment',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                'Money Back Guarantee',
                '<strong>Key features</strong',
                'Automated Course Creation',
                'Video Conferencing',
                'Skills/Certification Tracking',
                'Mobile Learning',
                'Asynchronous Learning',
                'CRM Features',
                'Gamification',
                'Social Learning/Message Boards',
                'Motivational Triggers',
                'Forums And Webinars',
                'E-commerce And Subscriptions',
                'Online Course Booking',
                'Excellent Reporting',
                'Invoicing Integration',
                'Financial Integrations',
                'Student Information management',
                'Automated communications',
                'Learning Management System',
                'Quick And Easy Course Scheduling',
                'Reporting And Data Analysis',
                'Assessment Management &amp; Live Feedback',
                'Gradebooks',
                'Quick User Integration',
                'Easy Payment Methods',
                'Online Communities &amp; Social Engagement',
                'Curation of Resources And Adding Own Resources'
            ]
        }
    ]
    const BrandList = [
        {
            mainHeading: "Startup Collateral",
            mainPrice: 108.9,
            strikePrice: 217.8,
            listing: [
                '2 Stationery Design Set',
                'FREE Fax Template',
                'Print Ready Formats',
                'UNLIMITED Revisions',
                '100% Satisfaction Guarantee',
                '100% Money Back Guarantee *'
            ]
        },
        {
            mainHeading: "Collateral Classic",
            mainPrice: 218.9,
            strikePrice: 437.8,
            listing: [
                '2 Stationery Design Set',
                'UNLIMITED Revisions',
                'Flyer Design',
                'Brochure Design (Bi-fold/Tri-fold)',
                '100% Satisfaction Guarantee',
                '100% Money Back Guarantee '
            ]
        },
        {
            mainHeading: "Premium Collateral",
            mainPrice: 438.9,
            strikePrice: 877.8,
            listing: [
                '2 Stationery Design Set',
                'Packaging Design',
                'UNLIMITED Revisions',
                'T-Shirt Design',
                '100% Satisfaction Guarantee',
                '100% Money Back Guarantee *'
            ]
        },
        {
            mainHeading: "Unlimited Collateral",
            mainPrice: 548.9,
            strikePrice: 1097.8,
            listing: [
                '2 Stationery Design Set',
                'Menu Card Design',
                'T-Shirt Design',
                '1 Banner Design',
                '100% Satisfaction Guarantee',
                '100% Money Back Guarantee '
            ]
        },
        {
            mainHeading: "Business Website",
            mainPrice: 2499.99,
            strikePrice: 2748.9,
            listing: [
                '15 to 20 Pages Website',
                'Custom Made, Interactive, Dynamic &amp; High End Design',
                'Custom PHP Development',
                '1 jQuery Slider Banner',
                'Up to 10 Custom Made Banner Designs',
                '10 Stock Images',
                'Unlimited Revisions',
                'Special Hoover Effects',
                'Content Management System (CMS)',
                'Online Appointment/Scheduling/Online Ordering Integration (Optional)',
                'Online Payment Integration (Optional)',
                'Multi Lingual (Optional)',
                'Custom Dynamic Forms (Optional)',
                'Signup Area (For Newsletters, Offers etc',
                'Search Bar',
                'Live Feeds of Social Networks integration (Optional)',
                'Mobile Responsive',
                '15 Seconds 2D Explainer Video',
                'Voice - Over &amp; Sound Effects',
                'Professional Script Writing',
                'Storyboard',
                'SEO Meta Tags',
                'FREE 5 Years Domain Name',
                'Free Google Friendly Sitemap',
                'Search Engine Submission',
                'Complete W3C Certified HTML',
                'Industry Specified Team of Expert Designers and Developers',
                'Complete Deployment',
                'Dedicated Accounts Manager',
                '100% Ownership Rights',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                '100% Money Back Guarantee *'
            ]
        },
        {
            mainHeading: "Automated Portal",
            mainPrice: 5499.98,
            strikePrice: 11000,
            listing: [
                'Unlimited Page Website',
                'Custom Content Management System (CMS)',
                'Unique Pages and UI Design',
                'Complete Custom Development',
                'Process Automation Tools',
                'Newsfeed Integration',
                'Social Media Plugins Integration',
                'Upto 40 Stock images',
                '10 Unique Banner Designs',
                'JQuery Slider',
                'Search Engine Submission',
                'Free Google Friendly Sitemap',
                'FREE 5 Years Hosting',
                'Custom Email Addresses',
                'Social Media Page Designs (Facebook, Twitter, Instagram)',
                'Complete W3C Certified HTML',
                'Complete Deployment',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                'Money Back Guarantee',
                '<strong>Key features</strong',
                'Automated Course Creation',
                'Video Conferencing',
                'Skills/Certification Tracking',
                'Mobile Learning',
                'Asynchronous Learning',
                'CRM Features',
                'Gamification',
                'Social Learning/Message Boards',
                'Motivational Triggers',
                'Forums And Webinars',
                'E-commerce And Subscriptions',
                'Online Course Booking',
                'Excellent Reporting',
                'Invoicing Integration',
                'Financial Integrations',
                'Student Information management',
                'Automated communications',
                'Learning Management System',
                'Quick And Easy Course Scheduling',
                'Reporting And Data Analysis',
                'Assessment Management &amp; Live Feedback',
                'Gradebooks',
                'Quick User Integration',
                'Easy Payment Methods',
                'Online Communities &amp; Social Engagement',
                'Curation of Resources And Adding Own Resources'
            ]
        }
    ]

    return (
        <>
            <div className='pricing-bg'>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={12} >
                            <h2 className='pricing-head'>Affordable packages that suits your budget</h2>
                            <p className='pricing-para'>Our success lies in changing the game for our clients’ brands. By focusing on customer outcomes, we build beautiful, engaging experiences that drive real business results.</p>
                        </Col>
                        <Tabs defaultActiveKey="Website" id="pricing-tabs">

                            <Tab eventKey="Website" title="Website" >
                                <Row>
                                    {PackagesList.map((packageItem, index) => (
                                        <Col key={index} sm={12} md={4} lg={4} xl={4}>
                                            <div className='package-box'>
                                                <h4>{packageItem.mainHeading}</h4>
                                                <h3>${packageItem.mainPrice} <span>${packageItem.strikePrice}</span></h3>
                                                <div className='packages-list'>
                                                    <ul className='list-unstyled'>
                                                        {packageItem.listing.map((item, idx) => (
                                                            <li key={idx}><i className="fa-solid fa-play me-3"></i>{item} </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className='text-center'>
                                                    <h6>addonn: <span className=''> $500 for expedited services</span></h6>
                                                    <button className='custom-btn'>Order Now</button>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab>
                            <Tab eventKey="Ecommerce" title="Ecommerce">
                                <Row>
                                    {EcommerceList.map((ecommerceItem, index) => (
                                        <Col key={index} sm={12} md={4} lg={4} xl={4}>
                                            <div className='package-box'>
                                                <h4>{ecommerceItem.mainHeading}</h4>
                                                <h3>${ecommerceItem.mainPrice} <span>${ecommerceItem.strikePrice}</span></h3>
                                                <div className='packages-list'>
                                                    <ul className='list-unstyled'>
                                                        {ecommerceItem.listing.map((item, idx) => (
                                                            <li key={idx}><i className="fa-solid fa-play me-3"></i>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className='text-center'>
                                                    <h6>addonn: <span className=''> $500 for expedited services</span></h6>
                                                    <button className='custom-btn'>Order Now</button>
                                                </div>
                                            </div>

                                        </Col>
                                    ))}


                                </Row>
                            </Tab>
                            <Tab eventKey="Web and App Development" title="Web and App Development">
                                <Row>
                                    {AppList.map((AppItem, index) => (
                                        <Col key={index} sm={12} md={4} lg={4} xl={4}>
                                            <div className='package-box'>
                                                <h4>{AppItem.mainHeading}</h4>
                                                <h3>${AppItem.mainPrice} <span>${AppItem.strikePrice}</span></h3>
                                                <div className='packages-list'>
                                                    <ul className='list-unstyled'>
                                                        {AppItem.listing.map((item, idx) => (
                                                            <li key={idx}><i className="fa-solid fa-play me-3"></i>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className='text-center'>
                                                    <h6>addonn: <span className=''> $500 for expedited services</span></h6>
                                                    <button className='custom-btn'>Order Now</button>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab>
                            <Tab eventKey="Branding" title="Branding">
                                <Row>
                                    {BrandList.map((BrandItem, index) => (
                                        <Col key={index} sm={12} md={4} lg={4} xl={4}>
                                            <div className='package-box'>
                                                <h4>{BrandItem.mainHeading}</h4>
                                                <h3>${BrandItem.mainPrice} <span>${BrandItem.strikePrice}</span></h3>
                                                <div className='packages-list'>
                                                    <ul className='list-unstyled'>
                                                        {BrandItem.listing.map((item, idx) => (
                                                            <li key={idx}><i className="fa-solid fa-play me-3"></i>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className='text-center'>
                                                    <h6>addonn: <span className=''> $500 for expedited services</span></h6>
                                                    <button className='custom-btn'>Order Now</button>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab>
                        </Tabs>
                    </Row>
                </Container>
               
                
            </div>
            
        </>

    )
}

export default Pricing;