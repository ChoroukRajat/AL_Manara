import {
  Typography,
  IconButton,
  Input,
  Button,
} from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Home","Our Product","About", "Our Team", "Contact Us"];

export function Footer() {
  return (
    <footer className="font-custom pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        {/*<div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-customBlue container max-w-6xl mx-auto rounded-2xl p-5 ">
          <Typography
            className="font-custom text-2xl md:text-3xl text-center font-bold "
            color="white"
          >
            Join our community!
          </Typography>
          <Typography
            color="white"
            className="font-custom md:w-7/12 text-center my-3 !text-base"
          >
            Get news in your inbox every week! We hate spam too, so no worries
            about this.
          </Typography>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
            <div className="w-80">

              <Input label="Email" color="white" />
            </div>
            <Button size="md" className="font-custom font-bold text-customRed lg:w-32" fullWidth color="white">
              subscribe
            </Button>
          </div>
        </div>*/}
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href="/"
            target="_blank"
            variant="h6"
            className="font-custom text-gray-900"
          >
            <div className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-2">
              <img className="w-14 " src="../logos/icone.png" alt="logo"/>
              <span className="text-customRed"> AL</span> <span className="text-customBlue">MANARA</span>
            </div>

          </Typography>
          {/* here I have to fix the links (change the datastructure to store the link) */}
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-linkedin text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Made{" "}

          by{" "}
          <a href="/" target="_blank">
            EduVision Team
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
