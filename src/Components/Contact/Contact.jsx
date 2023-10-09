const Contact = () => {
  return (
    <section className="bg-emerald-400 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p>
          If you have any questions or inquiries, feel free to contact us using
          the information below.
        </p>
        <div className="mt-4 flex flex-col md:flex-row lg:flex-row justify-center items-center gap-20">
          <div className="flex text-lg w-60 h-60 flex-col gap-3 border-4 p-4 rounded-lg bg-purple-200 border-red-300">
            <h1 className="font-bold bg-slate-300 rounded-lg p-4">
              Phone Number
            </h1>
            <div className="flex gap-3">
              <img
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/111201/phone-call.svg"
                alt=""
              />
              <span>01761859387</span>
            </div>
            <div className="flex gap-3">
              <img
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/111201/phone-call.svg"
                alt=""
              />
              <span>01918593526</span>
            </div>
            <div className="flex gap-3">
              <img
                className="w-6 h-6"
                src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-icon-png-image_6315990.png"
                alt=""
              />
              <span>01761859387</span>
            </div>
          </div>
          <div className="flex text-lg w-60 h-60 flex-col gap-3 border-4 p-4 rounded-lg bg-purple-200 border-red-300">
            <h1 className="font-bold bg-slate-300 rounded-lg p-4">Address</h1>
            <div className="flex gap-3">
              <img
                className="w-6 h-6"
                src="https://w7.pngwing.com/pngs/561/324/png-transparent-location-address-position-linear-icon-location-address-position-thumbnail.png"
                alt=""
              />
              <span>
                125, BIHS Hospital, <br /> 1 Darus Salam Rd, <br /> Mirpur,
                Dhaka 1216
              </span>
            </div>
          </div>
          <div className="flex text-lg w-60 h-60 flex-col gap-3 border-4 p-4 rounded-lg bg-purple-200 border-red-300">
            <h1 className="font-bold bg-slate-300 rounded-lg p-4">
              Social Media
            </h1>
            <div className="flex gap-3">
              <img className="ml-1"
                src="https://www.facebook.com/images/fb_icon_325x325.png"
                alt="Facebook"
                style={{ width: "30px", height: "30px" }}
              />
              <p className="">
                <a href="www.facebook.com">Facebook</a>
              </p>
            </div>
            <div className="flex gap-3">
              <img className="ml-2"
                src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png"
                alt=""
                style={{ width: "25px", height: "25px" }}
              />
              <p className="">
                <a href="www.twitter.com">X(Twitter)</a>
              </p>
            </div>
            <div className="flex gap-3">
            <img
            src="https://thumbs.dreamstime.com/b/instagram-154683470.jpg"
            alt=""
            className="rounded-full"
            style={{ width: "40px", height: "40px" }}
          />
              <p className="">
                <a href="www.instagram.com">Instagram</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
