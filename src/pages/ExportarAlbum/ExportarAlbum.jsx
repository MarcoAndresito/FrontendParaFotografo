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

const handleExport = async () => {
  if (selectedItems.length === 0) {
    toast.warning("Selecciona al menos una foto o álbum.");
    return;
  }

  setIsExporting(true);
  setProgress(0);
  setDownloadLink(null);

  try {
    for (let i = 1; i <= 100; i++) {
      await new Promise((r) => setTimeout(r, 30));
      setProgress(i);
    }

    const fakeDownloadLink = "https://example.com/descarga-temporal.zip";
    setDownloadLink(fakeDownloadLink);

    toast.success("¡Exportación completada!");
  } catch (err) {
    toast.error("Error al exportar: " + err.message);
  } finally {
    setIsExporting(false);
  }
};

 export default ExportPhotos;