import { fetchUserById } from "@/api/user.api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
export const Route = createFileRoute("/users/$userId")({
  component: RouteComponent,
  loader: async ({ params: { userId } }) => {
    return fetchUserById(userId);
  },
  pendingComponent: () => <div className="p-10">...Loading</div>,
});

function RouteComponent() {
  const router = useRouter();
  const { data: user }: { data: any } = Route.useLoaderData();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
      <Button className="mb-4 self-start" onClick={() => router.history.back()}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <Card className="w-full max-w-md shadow-md">
        <CardHeader className="flex flex-col items-center space-y-2 pb-2">
          <Avatar className="h-24 w-24">
            <AvatarImage src={user.avatar} alt={user.first_name} />
            <AvatarFallback>{`${user.first_name}${user.last_name}`}</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h2 className="text-2xl font-semibold">{`${user.first_name} ${user.last_name}`}</h2>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">ID:</span>
            <span>{user.id}</span>
          </div>
          {/* You can add more user details here if available in your actual data */}
        </CardContent>
      </Card>
    </div>
  );
}
