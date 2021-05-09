import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
  async create(request: Request, response: Response) {
    try {
      const { username, chat } = request.body;
      
      const settingsService = new SettingsService();
      
      const settings = await settingsService.create({ username, chat });
      
      return response.json(settings);
    } catch (error) {
      return response.status(400).json({error: error.message})
    }
  }

  async findByUsername(request: Request, response: Response) {
    try {
      const { username } = request.params;
      
      const settingsService = new SettingsService();
      
      const settings = await settingsService.findByUsername(username);
      
      return response.json(settings);
    } catch (error) {
      return response.status(400).json({error: error.message})
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { username } = request.params;
      const { chat } = request.body;
      
      const settingsService = new SettingsService();
      
      const setting = await settingsService.update(username, chat);
      
      return response.json(setting);
    } catch (error) {
      return response.status(400).json({error: error.message})
    }
  }
}

export { SettingsController };
