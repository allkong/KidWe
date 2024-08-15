import attendanceImage from '@/assets/menu/attendance.png';
import bookImage from '@/assets/menu/book.png';
import busImage from '@/assets/menu/bus.png';
import dinosaurImage from '@/assets/menu/dinosaur.png';
import folderImage from '@/assets/menu/folder.png';
import houseImage from '@/assets/menu/house.png';
import imageGalleryImage from '@/assets/menu/image-gallery.png';
import medicationImage from '@/assets/menu/medication.png';
import megaphoneImage from '@/assets/menu/megaphone.png';
import riceBowlImage from '@/assets/menu/rice-bowl.png';
import sketchBookImage from '@/assets/menu/sketch-book-padding.png';

interface MenuItem {
  image: string;
  color: string;
}

const menuItems: {[key: string]: MenuItem} = {
  attendance: {image: attendanceImage, color: 'bg-[#FFD4DA]'},
  book: {image: bookImage, color: 'bg-[#EAD7FF]'},
  bus: {image: busImage, color: 'bg-[#FFF2BA]'},
  dinosaur: {image: dinosaurImage, color: 'bg-[#BDE8CC]'},
  folder: {image: folderImage, color: 'bg-[#DEE1D4]'},
  house: {image: houseImage, color: 'bg-[#ECD1D7]'},
  imageGallery: {image: imageGalleryImage, color: 'bg-[#C6E6B6]'},
  medication: {image: medicationImage, color: 'bg-[#B8E6FF]'},
  megaphone: {image: megaphoneImage, color: 'bg-[#FFE1CC]'},
  riceBowl: {image: riceBowlImage, color: 'bg-[#FFF7DB]'},
  sketchBook: {image: sketchBookImage, color: 'bg-[#C8D7FF]'},
};

const getImage = (key: keyof typeof menuItems): string => {
  return menuItems[key]?.image || '';
};

const getColor = (key: keyof typeof menuItems): string => {
  return menuItems[key]?.color || '';
};

interface MainMenuProps {
  img: keyof typeof menuItems;
  text: string;
}

const MainMenu = ({img, text}: MainMenuProps) => {
  return (
    <div className="flex flex-col items-center w-fit h-fit ">
      <div
        className={`${getColor(img)} p-2 mb-1 w-12 h-12 flex justify-center items-center rounded-lg`}
      >
        <img className="object-contain w-auto h-full" src={getImage(img)} />
      </div>
      <p className="text-xs font-semibold text-gray-300 whitespace-nowrap">
        {text}
      </p>
    </div>
  );
};

export default MainMenu;
