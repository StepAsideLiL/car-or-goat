import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Classname } from "@/lib/types";
import { cn } from "@/lib/utils";
import { findAndSync } from "@/lib/actions";
import { syncWithLocalDB } from "@/lib/localStorage";
import { useRouter } from "next/navigation";
import { resetStore } from "@/lib/store/store-utils";

const formSchema = z.object({
  userId: z.string(),
});

const SyncWithUserId = ({ className = "" }: Classname) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values.userId);
    const user = await findAndSync(values.userId);
    if (user !== null) {
      syncWithLocalDB(user);
      router.refresh();
      resetStore();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn(className)}>
        <FormField
          control={form.control}
          name="userId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Id</FormLabel>
              <div className="flex gap-2 items-center">
                <FormControl>
                  <Input placeholder="Your Id" type="text" {...field} />
                </FormControl>
                <Button type="submit">Sync</Button>
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SyncWithUserId;
