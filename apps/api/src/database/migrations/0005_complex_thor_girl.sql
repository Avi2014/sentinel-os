CREATE TABLE "sensors" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"organization_id" uuid NOT NULL,
	"asset_id" uuid NOT NULL,
	"sensor_code" varchar(100) NOT NULL,
	"name" varchar(150) NOT NULL,
	"type" varchar(100) NOT NULL,
	"manufacturer" varchar(100),
	"model" varchar(100),
	"unit" varchar(30),
	"status" varchar(50) DEFAULT 'ACTIVE' NOT NULL,
	"last_value" numeric,
	"last_heartbeat" timestamp,
	"installation_date" timestamp,
	"location" varchar(255),
	"metadata" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "sensors_organization_sensor_code_unique" UNIQUE("organization_id","sensor_code")
);
--> statement-breakpoint
ALTER TABLE "sensors" ADD CONSTRAINT "sensors_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sensors" ADD CONSTRAINT "sensors_asset_id_assets_id_fk" FOREIGN KEY ("asset_id") REFERENCES "public"."assets"("id") ON DELETE cascade ON UPDATE no action;