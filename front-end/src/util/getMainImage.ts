import attendanceImage from '@/assets/menu/attendance.png';
import bookImage from '@/assets/menu/book.png';
import busImage from '@/assets/menu/bus.png';
import dinosaurImage from '@/assets/menu/dinosaur.png';
import folderImage from '@/assets/menu/folder.png';
import houseImage from '@/assets/menu/house.png';
import iconImage from '@/assets/menu/icon.png';
import imageGalleryImage from '@/assets/menu/image-gallery.png';
import medicationImage from '@/assets/menu/medication.png';
import megaphoneImage from '@/assets/menu/megaphone.png';
import pencilImage from '@/assets/menu/pencil.png';
import riceBowlImage from '@/assets/menu/rice-bowl.png';
// import sketchBookImage from '@/assets/menu/sketch-book.png';
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
  icon: {image: iconImage, color: ''},
  imageGallery: {image: imageGalleryImage, color: 'bg-[#C6E6B6]'},
  medication: {image: medicationImage, color: 'bg-[#B8E6FF]'},
  megaphone: {image: megaphoneImage, color: 'bg-[#FFE1CC]'},
  pencil: {image: pencilImage, color: ''},
  riceBowl: {image: riceBowlImage, color: 'bg-[#FFF7DB]'},
  sketchBook: {image: sketchBookImage, color: 'bg-[#C8D7FF]'},
};

const getImage = (key: string): string => {
  return menuItems[key]?.image || '';
};

const getColor = (key: string): string => {
  return menuItems[key]?.color || '';
};

export {getImage, getColor};
