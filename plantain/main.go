package main

import (
	"os"
	"time"

	fiber "github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/nulfrost/vend/routes"
)

func main() {

	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000",
		AllowMethods: "GET,PUT,POST,DELETE",
	}))
	app.Use(logger.New(logger.Config{
		Next:         nil,
		Format:       "[${time}] ${status} - ${latency} ${method} ${path}\n",
		TimeFormat:   "15:04:05",
		TimeZone:     "Local",
		TimeInterval: 500 * time.Millisecond,
		Output:       os.Stderr,
	}))

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Vend API server running")
	})

	app.Get("/create", routes.CreateSingleAd)
	app.Get("/update", routes.UpdateSingleAd)
	app.Get("/delete", routes.DeleteSingleAd)

	app.Listen(":3070")
}
