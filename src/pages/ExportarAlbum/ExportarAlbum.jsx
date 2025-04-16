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

return (
  <div className={styles.exportContainer}>
    <div className={styles.exportForm}>
      <h2 className={styles.exportTitle}>Exportar Fotos / Álbumes</h2>

      <div className={styles.exportGrid}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`${styles.exportItem} ${
              selectedItems.includes(item.id) ? styles.selected : ""
            }`}
            onClick={() => handleSelect(item)}
          >
            <div className={styles.itemInfo}>
              {item.type === "photo" ? (
                <FileImage size={20} className={styles.icon + " " + styles.blue} />
              ) : (
                <Folder size={20} className={styles.icon + " " + styles.yellow} />
              )}
              <span>{item.name}</span>
            </div>
            <input
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              readOnly
            />
          </div>
        ))}
      </div>

      <div className={styles.exportFormatGroup}>
        <label>Formato de Exportación</label>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className={styles.exportFormat}
        >
          <option value="JPG">JPG</option>
          <option value="PNG">PNG</option>
          <option value="ZIP">ZIP (para álbumes)</option>
        </select>
      </div>

      <div className={styles.exportActions}>
        <button
          onClick={handleExport}
          className={styles.exportButton}
          disabled={isExporting}
        >
          <Download size={18} style={{ marginRight: "6px" }} />
          Exportar
        </button>

        {isExporting && (
          <div className={styles.exportProgress}>
            <div
              className={styles.exportProgressBar}
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      {downloadLink && (
        <div className={styles.downloadLink}>
          <a href={downloadLink} target="_blank" rel="noopener noreferrer">
            Descargar archivo (disponible por 24h)
          </a>
        </div>
      )}
    </div>
  </div>
);
};


 export default ExportPhotos;