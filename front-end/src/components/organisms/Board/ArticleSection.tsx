import {checkSafeHTML} from '@/utils/checkSafeHTML';
import ArticleImage from '@/components/organisms/Board/ArticleImage';

interface ArticleSectionProps {
  content: string;
  images: string[];
}

const ArticleSection = ({content, images}: ArticleSectionProps) => {
  const safeContent = checkSafeHTML(content);

  return (
    <div className="px-6 pt-3 pb-6 bg-white border-b">
      <div className="mb-5" dangerouslySetInnerHTML={{__html: safeContent}} />
      <ArticleImage images={images} />
    </div>
  );
};

export default ArticleSection;
