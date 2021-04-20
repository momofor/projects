#! /usr/bin/env luajit

local _ = require("_helpers")

local db_path = "~/documents/pdf/"
_.exec("cd " .. db_path)

_.exec("git pull")
