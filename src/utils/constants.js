import Grid from "../assets/icons/grid.svg";
import Input from "../assets/icons/input.svg";
import Output from "../assets/icons/output.svg";
import Merge from "../assets/icons/merge.svg";
import Transform from "../assets/icons/transform.svg";
import Text from "../assets/icons/text.svg";
import Download from "../assets/icons/download.svg";
import Notification from "../assets/icons/notification.svg";
import LLM from "../assets/icons/llm.svg";
import Marketing from "../assets/icons/marketing.svg";

export const INPUT_OPTIONS = [
  { text: "Text", value: "text" },
  { text: "File", value: "file" },
  { text: "Date", value: "date" },
];

export const NODE_TYPES = {
  input: "input",
  output: "output",
  text: "text",
  llm: "llm",
  merge: "merge",
  transformation: "transformation",
  download: "download",
  notification: "notification",
  marketing: "marketing",
};

export const DOC_TYPES = [
  { text: "Select Document Type", value: "" },
  { text: "Image", value: "image" },
  { text: "Word/PDF", value: "text_document" },
];

export const IMAGE_TRANSFORMATION_OPTIONS = [
  { text: "Select Transformation Type", value: "" },
  { text: "Rotate 90'", value: "rotate_90" },
  { text: "Rotate 180'", value: "rotate_180" },
  { text: "Crop square", value: "crop_square" },
  { text: "Crop Circular", value: "crop_circular" },
  { text: "Add Border", value: "border_add" },
  { text: "Convert JPEG", value: "convert_jpeg" },
  { text: "Convert PNG", value: "convert_png" },
  { text: "Filter Blur", value: "filter_blur" },
];

export const DOC_TRANSFORMATION_OPTIONS = [
  { text: "Select Transformation Type", value: "" },
  { text: "Convert DOC", value: "convert_doc" },
  { text: "Convert PDF", value: "convert_pdf" },
];

export const ICON_MAP = {
  grid: Grid,
  input: Input,
  output: Output,
  merge: Merge,
  transformation: Transform,
  text: Text,
  download: Download,
  notification: Notification,
  llm: LLM,
  marketing:Marketing
};

export const NOTIFICATION_OPTIONS = [
  { text: "WhatsApp", value: "whatsapp" },
  { text: "Mail", value: "mail" },
  { text: "Message", value: "message" },
];

export const MARKETING_PLACES = [
  { text: "Facebook", value: "facebook" },
  { text: "YouTube", value: "youtube" },
  { text: "Google", value: "google" },
  { text: "Instagram", value: "instagram" },
  { text: "Twitter/X", value: "twitter" },
];
