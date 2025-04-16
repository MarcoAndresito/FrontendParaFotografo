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

const items = [
  { id: 1, name: "Foto1.jpg", type: "photo" },
  { id: 2, name: "Foto2.png", type: "photo" },
  { id: 3, name: "Álbum Vacaciones", type: "album" },
];

const handleSelect = (item) => {
  if (selectedItems.includes(item.id)) {
    setSelectedItems(selectedItems.filter((i) => i !== item.id));
  } else {
    setSelectedItems([...selectedItems, item.id]);
  }
};

 export default ExportPhotos;