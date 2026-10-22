import { Badge } from "@/registry/bases/base/styles/material/ui/badge";
import { Button } from "@/registry/bases/base/styles/material/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/styles/material/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/styles/material/ui/table";

/**
 * Shared example page for the material collection, rendered from the
 * isolated v4 primitives. Every page-example type resolves to this preview
 * until dedicated per-page v4 examples are authored.
 */
export function DefaultV4ExamplePage({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold capitalize">{title}</h2>
          <p className="text-material-muted-foreground text-sm">
            material preview rendered from isolated components.
          </p>
        </div>
        <Badge variant="outline">v4</Badge>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Components", value: "62", note: "isolated primitives" },
          { title: "Namespace", value: "dft", note: "shared token prefix" },
          { title: "Collection", value: "v4", note: "upstream generation" },
        ].map((stat) => (
          <Card key={stat.title}>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <CardDescription>{stat.note}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent components</CardTitle>
          <CardDescription>Sample inventory table.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>Sample component inventory.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Component</TableHead>
                <TableHead>Namespace</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {["button", "card", "dialog"].map((name) => (
                <TableRow key={name}>
                  <TableCell className="font-medium capitalize">
                    {name}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">dft</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export function DefaultV4MailPage() {
  return <DefaultV4ExamplePage title="mail" />;
}

export function DefaultV4CardsPage() {
  return <DefaultV4ExamplePage title="cards" />;
}

export function DefaultV4AuthenticationPage() {
  return <DefaultV4ExamplePage title="authentication" />;
}

export function DefaultV4SettingsProfilePage() {
  return <DefaultV4ExamplePage title="forms" />;
}

export function DefaultV4DashboardPage() {
  return <DefaultV4ExamplePage title="dashboard" />;
}

export function DefaultV4MusicPage() {
  return <DefaultV4ExamplePage title="music" />;
}

export function DefaultV4PlaygroundPage() {
  return <DefaultV4ExamplePage title="playground" />;
}

export function DefaultV4TaskPage() {
  return <DefaultV4ExamplePage title="tasks" />;
}
