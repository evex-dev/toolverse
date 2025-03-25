import { NextApiRequest, NextApiResponse } from 'next';

// Define Tool type
interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
}

// Mock database
let tools: Tool[] = [];

// Handler function
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Get all tools
      res.status(200).json(tools);
      break;
    case 'POST':
      // Create a new tool
      const newTool = req.body;
      tools.push(newTool);
      res.status(201).json(newTool);
      break;
    case 'PUT':
      // Update a tool
      const { id, ...updatedTool } = req.body;
      tools = tools.map(tool => tool.id === id ? { ...tool, ...updatedTool } : tool);
      res.status(200).json(updatedTool);
      break;
    case 'DELETE':
      // Delete a tool
      const { id: deleteId } = req.body;
      tools = tools.filter(tool => tool.id !== deleteId);
      res.status(204).end();
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}