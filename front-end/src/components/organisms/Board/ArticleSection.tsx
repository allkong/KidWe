import DOMPurify, {Config} from 'dompurify';
import ArticleImage from '@/components/organisms/Board/ArticleImage';

interface ArticleSectionProps {
  content: string;
  images: string[];
}

const ArticleSection = ({content, images}: ArticleSectionProps) => {
  // React Quill 설정 이후에 다시 커스텀하기
  const domPurifyConfig: Config = {
    ALLOWED_TAGS: [
      'b',
      'i',
      'em',
      'strong',
      'a',
      'p',
      'ul',
      'li',
      'ol',
      'br',
      'blockquote',
    ],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'target'],
    ALLOW_DATA_ATTR: false, // data-* 속성 허용 여부
    RETURN_TRUSTED_TYPE: false, // TrustedType으로 반환 (브라우저 지원 시)
    FORCE_BODY: true, // 정화된 결과가 항상 <body>로 래핑되도록 강제
  };

  const safeContent = DOMPurify.sanitize(content, domPurifyConfig) as string;

  return (
    <div className="px-6 pt-3 pb-6 bg-white border-b">
      <div className="mb-5" dangerouslySetInnerHTML={{__html: safeContent}} />
      <ArticleImage images={images} />
    </div>
  );
};

export default ArticleSection;
