package routes

import fiber "github.com/gofiber/fiber/v2"

func CreateSingleAd(c *fiber.Ctx) error {
	return c.SendStatus(fiber.StatusOK)
}

func DeleteSingleAd(c *fiber.Ctx) error {
	return c.SendStatus(fiber.StatusOK)
}

func UpdateSingleAd(c *fiber.Ctx) error {
	return c.SendStatus(fiber.StatusOK)
}
