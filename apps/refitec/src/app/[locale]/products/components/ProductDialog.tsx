import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Captions } from "lucide-react";

type Props = {
  title: string;
  description: React.ReactNode;
  readMoreLabel: string;
};

const ProductDialog = ({ title, description, readMoreLabel }: Props) => {
  return (
    <Dialog>
      <DialogTrigger className="text-primary hover:text-secondary hover:border-b-secondary flex w-fit cursor-pointer items-center gap-4 border-b border-b-transparent font-medium duration-300 ease-out">
        {readMoreLabel}
        <Captions className="size-8" strokeWidth={1.5} />
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] w-full max-w-4xl gap-8 overflow-y-auto">
        <DialogHeader className="gap-2">
          <DialogTitle className="text-primary max-w-[95%] text-4xl font-bold">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="prose prose-2xl max-w-none">
          <p className="text-2xl/normal">{description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
