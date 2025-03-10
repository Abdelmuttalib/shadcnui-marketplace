import { PageContainer } from "@/components/common/page-container";
import { DropdownMenuDemo } from "@/components/demo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";

export default function Dark() {
  return (
    <div className="flex h-full w-full flex-col bg-muted py-20">
      <div>
        <PageContainer>
          <div className="flex max-w-md flex-col gap-4">
            <Typography
              as={"h1"}
              variant="6xl/bold"
              className="col-start-1 row-start-1 mt-4 max-w-[36rem] font-[490] tracking-tighter"
            >
              shadcn ui styles
            </Typography>
            <div className="flex items-center gap-4">
              <Input placeholder="Search" />
              <Button>Search</Button>
              <Button variant={"secondary"}>Search</Button>
              <Button variant={"outline"}>Search</Button>
              <Button variant={"destructive"}>Search</Button>
            </div>
            <p className="text-muted-foreground">
              Free Quarterly Email of Our Top 10 Dark-Themed Websites.
            </p>

            <div className="flex items-center gap-4">
              <DropdownMenuDemo />
              <div className="w-fit rounded-md border bg-accent p-1 px-2 text-sm">
                Badge
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </div>
  );
}
