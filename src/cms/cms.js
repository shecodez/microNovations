import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import IndexPagePreview from "./preview-templates/IndexPagePreview";
import ServicePostPreview from "./preview-templates/ServicePostPreview";
import SuportPagePreview from "./preview-templates/SupportPagePreview";
import WhyChooseUsPagePreview from "./preview-templates/WhyChooseUsPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("service", ServicePostPreview);
CMS.registerPreviewTemplate("products", SuportPagePreview);
CMS.registerPreviewTemplate("blog", WhyChooseUsPagePreview);
