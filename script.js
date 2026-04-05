// Initialize Lucide Icons
lucide.createIcons();

// Fixed Material Rates (Admin values)
const rates = {
    cement: 780,     // Rs. per bag
    sand: 65,        // Rs. per cu.ft
    aggregate: 85,   // Rs. per cu.ft
    steel: 115,      // Rs. per kg
    bricks: 18,      // Rs. per pc
};

function calculateAll() {
    // 1. Get User Inputs
    const area = parseFloat(document.getElementById('area').value) || 0;
    const qMultiplier = parseFloat(document.getElementById('quality').value);
    const finishRatio = parseFloat(document.getElementById('finishing').value);

    // 2. Material Formulas (Based on Industry Standards)
    const cement = Math.round((area * 0.45) * qMultiplier);
    const sand = Math.round((area * 1.8) * qMultiplier);       
    const aggregate = Math.round((area * 1.35) * qMultiplier); 
    const steel = Math.round((area * 4) * qMultiplier);
    const bricks = Math.round((area * 12) * qMultiplier);

    // 3. Update Stat Cards
    document.getElementById('valCement').innerText = cement.toLocaleString();
    document.getElementById('valSand').innerText = sand.toLocaleString();
    document.getElementById('valAggregate').innerText = aggregate.toLocaleString();
    document.getElementById('valSteel').innerText = steel.toLocaleString();

    // 4. Generate Costing Data
    const civilItems = [
        { cat: 'Civil', name: 'Cement (OPC/PPC)', qty: cement, unit: 'Bags', rate: rates.cement },
        { cat: 'Civil', name: 'River Sand / M-Sand', qty: sand, unit: 'ft³', rate: rates.sand },
        { cat: 'Civil', name: 'Crushed Aggregate', qty: aggregate, unit: 'ft³', rate: rates.aggregate },
        { cat: 'Civil', name: 'Steel Reinforcement', qty: steel, unit: 'Kg', rate: rates.steel },
        { cat: 'Civil', name: 'Standard Bricks', qty: bricks, unit: 'Pcs', rate: rates.bricks }
    ];

    let civilSubtotal = 0;
    let tableHTML = '';

    civilItems.forEach(item => {
        const lineTotal = item.qty * item.rate;
        civilSubtotal += lineTotal;
        tableHTML += `
            <tr>
                <td style="color:var(--text-muted)">${item.cat}</td>
                <td><strong>${item.name}</strong></td>
                <td>${item.qty.toLocaleString()} ${item.unit}</td>
                <td>Rs. ${item.rate}</td>
                <td>Rs. ${lineTotal.toLocaleString()}</td>
            </tr>`;
    });

    // 5. Systems Calculation (Electrical & Sanitary)
    const electrical = Math.round(civilSubtotal * finishRatio);
    const sanitary = Math.round(civilSubtotal * finishRatio);
    const grandTotal = civilSubtotal + electrical + sanitary;

    // Add Systems Rows to Table
    tableHTML += `
        <tr style="background:#fdf4ff">
            <td style="color:#a21caf">Systems</td>
            <td><strong>Electrical Works & Wiring</strong></td>
            <td>Lump Sum</td>
            <td>${(finishRatio * 100).toFixed(0)}% of Civil</td>
            <td>Rs. ${electrical.toLocaleString()}</td>
        </tr>
        <tr style="background:#f0f9ff">
            <td style="color:#0369a1">Systems</td>
            <td><strong>Sanitary & Plumbing</strong></td>
            <td>Lump Sum</td>
            <td>${(finishRatio * 100).toFixed(0)}% of Civil</td>
            <td>Rs. ${sanitary.toLocaleString()}</td>
        </tr>
    `;

    // 6. Update UI Totals
    document.getElementById('tableBody').innerHTML = tableHTML;
    document.getElementById('tableGrandTotal').innerText = "Rs. " + grandTotal.toLocaleString();
    document.getElementById('grandTotalDisplay').innerText = "Rs. " + grandTotal.toLocaleString();
}

// Run calculation once on page load
window.onload = calculateAll;