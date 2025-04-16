import React, { useState } from "react";
import { toast } from "react-toastify";
import { Download, FileImage, Folder } from "lucide-react";
import styles from "./ExportarAlbum.module.css"; // Importa los estilos como 'styles'

const ExportPhotos = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [format, setFormat] = useState("JPG");
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadLink, setDownloadLink] = useState(null);

}
 export default ExportPhotos;