const WhatsAppButton = () => {
  const phoneNumber = "265886595123"; // replace with SCS number

  const message = encodeURIComponent(
    "Hello Supercare Solutions,\n\nI would like to request a transaction. Please assist me."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
    >
      Request via WhatsApp
    </a>
  );
};

export default WhatsAppButton;
