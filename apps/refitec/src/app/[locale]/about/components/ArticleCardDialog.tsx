import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Captions } from "lucide-react";
import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  description: React.ReactNode;
  image: StaticImageData;
  readMoreLabel: string;
};

const ArticleCardDialog = ({
  title,
  description,
  image,
  readMoreLabel,
}: Props) => {
  return (
    <Dialog>
      <DialogTrigger className="text-primary hover:text-secondary hover:border-b-secondary mt-auto ml-auto flex w-fit cursor-pointer items-center gap-4 border-b border-b-transparent font-medium duration-300 ease-out">
        {readMoreLabel}
        <Captions className="size-8" strokeWidth={1.5} />
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] w-full max-w-4xl gap-8 overflow-y-auto">
        <DialogHeader className="gap-2">
          <DialogTitle className="text-primary max-w-[95%] text-4xl font-bold">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-6">
          <figure className="relative overflow-hidden">
            <Image
              src={image}
              alt={title}
              className="aspect-[4/2.5] w-full object-cover"
            />
          </figure>

          <div className="prose prose-2xl max-w-none">
            <p className="text-2xl/normal">{description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleCardDialog;
