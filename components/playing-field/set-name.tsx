"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useScoreStore } from "@/lib/store/store";
import { Label } from "@/components/ui/label";
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
  FormMessage,
} from "@/components/ui/form";
import { setUsernameAndId } from "@/lib/localStorage";

const formSchema = z.object({
  username: z
    .string()
    .min(4, { message: "Name must be at least 4 chatacters long" }),
});

const SetUsername = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const username = useScoreStore((s) => s.username);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values.username);
    setUsernameAndId(values.username);
  }

  return (
    <Dialog open={username === "" ? true : false}>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Mr. James Bond"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Save</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SetUsername;
