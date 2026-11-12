"use client";

import { useDesignSystem } from "../../../components/design-system-provider";

export function GithubProfile() {
  const {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,

    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    Input,
    NativeSelect,
    NativeSelectOption,

    Textarea,
  } = useDesignSystem();

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Manage your profile information.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="profile">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input id="name" placeholder="shadcn" />
              <FieldDescription>
                Your name may appear around GitHub where you contribute or are
                mentioned. You can remove it at any time.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Public Email</FieldLabel>
              <NativeSelect id="email">
                <NativeSelectOption value="m@shadcn.com">
                  m@shadcn.com
                </NativeSelectOption>
                <NativeSelectOption value="m@gmail.com">
                  m@gmail.com
                </NativeSelectOption>
              </NativeSelect>
              <FieldDescription>
                You can manage verified email addresses in your{" "}
                <a href="#email-settings">email settings</a>.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="bio">Bio</FieldLabel>
              <Textarea
                id="bio"
                placeholder="Tell us a little bit about yourself"
              />
              <FieldDescription>
                You can <span>@mention</span> other users and organizations to
                link to them.
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button form="profile" className="style-sera:w-full">
          Save Profile
        </Button>
      </CardFooter>
    </Card>
  );
}
