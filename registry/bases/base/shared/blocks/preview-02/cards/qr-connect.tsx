"use client";

import QRCode from "react-qr-code";

import { useDesignSystem } from "../../../components/design-system-provider";

export function QrConnect() {
  const {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardDescription,
    CardTitle,
    Button,
  } = useDesignSystem();

  return (
    <Card>
      <CardContent className="flex justify-center pt-6">
        <div className="rounded-xl border bg-white p-4">
          <QRCode
            value="https://ledger.app/connect/jd-4829"
            size={160}
            level="M"
          />
        </div>
      </CardContent>
      <CardHeader className="text-center">
        <CardTitle>Scan to connect your mobile device</CardTitle>
        <CardDescription>
          Open the Ledger mobile app and scan this code to link your device.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="secondary" className="w-full">
          Got it
        </Button>
      </CardFooter>
    </Card>
  );
}
