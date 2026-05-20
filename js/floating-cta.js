(function () {
    const callHref = 'tel:+918096562345';
    const whatsappHref = 'https://wa.me/8096562345?text=Hi%20Bhoomerang%20Media!%20I%E2%80%99m%20interested%20in%20growing%20my%20brand.%20Can%20we%20chat%20about%20a%20free%20consultation%20for%20my%20business?';

    function inject() {
        if (document.querySelector('.call-float') || document.querySelector('.whatsapp-float')) return;

        const callLink = document.createElement('a');
        callLink.href = callHref;
        callLink.className = 'call-float';
        callLink.setAttribute('aria-label', 'Call Bhoomerang Media');
        callLink.title = 'Call Now';
        callLink.innerHTML = '<i class="fa-solid fa-phone" aria-hidden="true"></i>';

        const waLink = document.createElement('a');
        waLink.href = whatsappHref;
        waLink.className = 'whatsapp-float';
        waLink.target = '_blank';
        waLink.rel = 'noopener';
        waLink.setAttribute('aria-label', 'Chat with Bhoomerang Media on WhatsApp');
        waLink.title = 'Chat on WhatsApp';
        waLink.innerHTML = '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i>';

        document.body.appendChild(callLink);
        document.body.appendChild(waLink);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inject);
    } else {
        inject();
    }
})();
