function openModal(id) { document.getElementById(id).classList.add('active'); }
        function closeModal(id) { document.getElementById(id).classList.remove('active'); }

        document.addEventListener('DOMContentLoaded', () => {
            const qrBox = document.getElementById("qrcode");
            if(qrBox) {
                new QRCode(qrBox, {
                    text: window.location.href,
                    width: 130,
                    height: 130,
                    colorDark : "#1e3a8a",
                    colorLight : "#ffffff"
                });
            }

            const toast = document.getElementById('toast');
            const showToast = (msg) => {
                toast.textContent = msg;
                toast.style.display = 'block';
                setTimeout(() => toast.style.display = 'none', 2200);
            };

            document.getElementById('btn-vcard').addEventListener('click', () => {
                const vCardData = `BEGIN:VCARD\nVERSION:3.0\nFN:Deicy Yolima Buitrago Arismendy\nORG:Administración de Propiedad Horizontal\nTITLE:Especialista en Gerencia / PNL Practitioner\nTEL;TYPE=CELL:+573054855538\nNOTE:Administración integral de copropiedades y mediación PNL.\nEND:VCARD`;
                const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Deicy_Buitrago_Contacto.vcf';
                a.click();
                URL.revokeObjectURL(url);
                showToast('Contacto guardado en agenda');
            });
        });
