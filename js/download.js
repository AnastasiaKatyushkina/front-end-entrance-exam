/* jshint esversion: 6 */
/* global html2canvas */

export function initDownload() {
  const downloadBtn = document.querySelector('.download-btn');
  if (!downloadBtn) {
    return;
  }

  downloadBtn.addEventListener('click', () => {
    const { jsPDF } = window.jspdf;

    const resume = document.getElementById('resume');
    if (!resume) {
      return;
    }

    html2canvas(resume, {
      scale: 2,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const margin = 1;
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pageWidth - margin;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let position = 0;
      if (imgHeight < pageHeight) {
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      } else {
        while (position < imgHeight) {
          pdf.addImage(imgData, 'PNG', 0, -position, imgWidth, imgHeight);
          position += pageHeight;
          if (position < imgHeight) {
            pdf.addPage();
          }
        }
      }

      pdf.save('resume.pdf');
    });
  });
}
