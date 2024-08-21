import { NewsletterForm } from "@/containers/newsletter/form";
import { NewsletterStayTuned } from "@/containers/newsletter/stay-tuned";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const Newsletter = () => {
  return (
    <>
      <NewsletterStayTuned />

      <div className="grid grid-cols-12 gap-6 py-20">
        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <div className="text-center">
            <h3 className="text-lg font-bold uppercase">Sign up</h3>
            <p className="mt-4 text-xl">
              Be the first to know about the full launch of the Global Ecosystems Atlas.
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="mt-12">
                  Sign up for updates
                </Button>
              </DialogTrigger>
              <DialogContent>
                <NewsletterForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
};
