param(
    [Parameter(Mandatory=$true)][string]$Name
)

try {
    $workspace = Get-Location
    $lwcRoot = Join-Path $workspace.Path 'force-app\main\default\lwc'
    if (-not (Test-Path $lwcRoot)) {
        Write-Host "LWC root not found: $lwcRoot" -ForegroundColor Red
        exit 1
    }

    $componentDir = Join-Path $lwcRoot $Name
    if (Test-Path $componentDir) {
        Write-Host "Component folder already exists: $componentDir" -ForegroundColor Yellow
        exit 1
    }

    New-Item -ItemType Directory -Path $componentDir -Force | Out-Null

    # Build class name (PascalCase)
    $parts = $Name -split '[-_]'
    $className = ($parts | ForEach-Object { if ($_.Length -gt 0) { ($_[0].ToUpper() + $_.Substring(1)) } }) -join ''

    $html = @"<template>
    <div class="slds-p-around_medium">
        <h1>$Name</h1>
        <p>Created by scaffold script.</p>
    </div>
</template>
"@

    $js = "import { LightningElement } from 'lwc';`n`nexport default class $className extends LightningElement {`n}`n"

    $css = ".slds-p-around_medium { padding: 1rem; }`n"

    $meta = @"<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>64.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__RecordPage</target>
        <target>lightning__AppPage</target>
        <target>lightning__HomePage</target>
    </targets>
</LightningComponentBundle>
"@

    Set-Content -Path (Join-Path $componentDir "$Name.html") -Value $html -Encoding UTF8
    Set-Content -Path (Join-Path $componentDir "$Name.js") -Value $js -Encoding UTF8
    Set-Content -Path (Join-Path $componentDir "$Name.css") -Value $css -Encoding UTF8
    Set-Content -Path (Join-Path $componentDir "$Name.js-meta.xml") -Value $meta -Encoding UTF8

    Write-Host "Created LWC component at: $componentDir" -ForegroundColor Green
} catch {
    Write-Host "Error creating component: $_" -ForegroundColor Red
    exit 1
}
