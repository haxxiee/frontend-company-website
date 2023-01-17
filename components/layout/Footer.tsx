import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-5 py-20">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-3xl">Say hi</h2>
          <p className="font-medium text-lg">hi@webapp.com</p>
        </div>
        <div>
          <h2 className="font-bold text-3xl">Come by</h2>
          <p className="font-medium text-lg">Kungsgatan 33</p>
          <p className="font-medium text-lg">111 34 Stockholm</p>
        </div>
        <div>
          <h2 className="font-bold text-3xl">Follow us</h2>
          <div>Linkedin Insta</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
