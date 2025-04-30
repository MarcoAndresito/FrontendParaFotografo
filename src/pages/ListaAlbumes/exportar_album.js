const fetchExportAlbum = async (albumId) => {
    try {
        const response = await fetch(`https://localhost:7062/api/Albumes/${albumId}/Exportar`)
        if (!response.ok) {
            throw new Error('Error al exportar el álbum');
        }
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        const disposition = response.headers.get('Content-Disposition');
    let fileName = `${albumId}.zip`;
    if (disposition && disposition.includes('filename=')) {
      fileName = disposition
        .split('filename=')[1]
        .split(';')[0]
        .replace(/"/g, '');
    }

    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);

    } catch (error) {
        console.error(JSON.stringify(error));
    }
}

export { fetchExportAlbum };