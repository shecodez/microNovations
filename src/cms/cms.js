import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import NavbarPreview from "./preview-templates/NavbarPreview";
import HomePagePreview from "./preview-templates/HomePagePreview";
import ServicePostPreview from "./preview-templates/ServicePostPreview";
import SuportPagePreview from "./preview-templates/SupportPagePreview";
import WhyChooseUsPagePreview from "./preview-templates/WhyChooseUsPagePreview";
import FooterPreview from "./preview-templates/FooterPreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("navbar", NavbarPreview);
CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("service", ServicePostPreview);
CMS.registerPreviewTemplate("support", SuportPagePreview);
CMS.registerPreviewTemplate("whyChooseUs", WhyChooseUsPagePreview);
CMS.registerPreviewTemplate("footer", FooterPreview);
