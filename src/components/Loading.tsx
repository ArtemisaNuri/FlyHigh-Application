export const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);


import { Alert, AlertTitle } from "@/components/ui/alert";

export const ErrorAlert = ({ message }: { message: string }) => (
  <Alert variant="destructive" className="max-w-2xl mx-auto mt-8">
    <AlertTitle>Error</AlertTitle>
    <p>{message}</p>
  </Alert>
);
