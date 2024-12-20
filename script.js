const clicktoCopy = document.querySelector("#clickToCopy");

        clicktoCopy.addEventListener('click', () => {
            const chavePix = "<?=$payloadPix?>";
            navigator.clipboard.writeText(chavePix);
            document.querySelector('#message').innerHTML = "<?= __("Chave pix copiada com sucesso!") ?>";
            setTimeout(function () {
                document.querySelector('#message').innerHTML = "";
            }, 3000)
        });