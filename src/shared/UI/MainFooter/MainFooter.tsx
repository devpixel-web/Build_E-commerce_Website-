import { IoSendOutline } from 'react-icons/io5';

import app_store from '@assets/imgs/app_store.svg';
import google_play from '@assets/imgs/google_play.svg';
import q_rcode from '@assets/imgs/q_rcode.svg';

export default function MainFooter() {
  return (
    <footer className="bg-black">
      <div className="mx-auto flex max-w-[1440px] justify-between pb-16 pt-20 text-white">
        {/* Exclusive */}
        <div>
          <h5 className="pb-6 text-2xl font-bold">Exclusive</h5>
          <p className="pb-6 text-xl font-medium">Subscribe</p>
          <div className="flex flex-col gap-4">
            <label>Get 10% off your first order</label>
            <div className="flex items-center rounded border border-white px-4 py-3">
              <input
                placeholder="Enter your email"
                className="bg-black outline-0 placeholder:text-primary/50"
              />
              <IoSendOutline />
            </div>
          </div>
        </div>
        {/* Support */}
        <div>
          <h5 className="pb-6 text-2xl font-bold">Support</h5>
          <div className="flex max-w-[174px] flex-col gap-4">
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>

        {/* Account */}
        <div>
          <h5 className="pb-6 text-xl font-medium">Account</h5>
          <p>My Account</p>
          <div className="flex max-w-[175px] flex-col gap-4">
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
        </div>

        {/* Quick Link */}
        <div>
          <h5 className="pb-6 text-xl font-medium">Quick Link</h5>
          <div className="flex max-w-[175px] flex-col gap-4">
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
        </div>

        {/* Download App */}
        <div>
          <h5 className="pb-6 text-xl font-medium">Download App</h5>
          <p className="pb-2 text-xs font-medium text-primary/70">Save $3 with App New User Only</p>
          <div className="flex items-center gap-2">
            <img src={q_rcode} alt="q_rcode" />
            <div className="flex flex-col gap-2">
              <img src={google_play} alt="google_play" />
              <img src={app_store} alt="app_store" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
