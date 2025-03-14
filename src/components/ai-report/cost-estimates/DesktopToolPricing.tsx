
import React from "react";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { ToolPrice } from "../utils/toolPricingData";

interface DesktopToolPricingProps {
  tools: ToolPrice[];
}

const DesktopToolPricing: React.FC<DesktopToolPricingProps> = ({ tools }) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="font-semibold">Tool / Service</TableHead>
            <TableHead className="font-semibold">Approx. Monthly Cost</TableHead>
            <TableHead className="font-semibold">Purpose</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tools.map((tool, index) => (
            <TableRow key={index} className={index % 2 === 0 ? "hover:bg-gray-50" : "bg-gray-50 hover:bg-gray-100"}>
              <TableCell>
                {tool.secondUrl ? (
                  <>
                    <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                      {tool.tool.split(" or ")[0]}
                    </a>
                    {" or "}
                    <a href={tool.secondUrl} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                      {tool.tool.split(" or ")[1]}
                    </a>
                  </>
                ) : (
                  <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                    {tool.tool}
                  </a>
                )}
              </TableCell>
              <TableCell>{tool.cost}</TableCell>
              <TableCell>{tool.purpose}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DesktopToolPricing;
