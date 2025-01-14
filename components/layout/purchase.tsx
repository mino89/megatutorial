"use client";
import { handleSubscribe } from "@/app/(dashboard)/action";
import { Button } from "../ui/button";

interface PurchaseButtonProps {
  price_id: string;
}

const PurchaseButton = ({ price_id }: PurchaseButtonProps) => {
  const handlePurchase = async () => await handleSubscribe(price_id);
  return (
    <Button className="w-full" onClick={handlePurchase}>
      Get Started
    </Button>
  );
};

export default PurchaseButton;
