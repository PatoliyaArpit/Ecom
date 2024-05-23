const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PFvkNSF0uRd81kXMu1vR2ox7zhvBXi6FqqhVgZgzPMTsIG3bEw0KK5t5YZXZS9oC8g3NLJiQAVCh3eXjbvixvp000nVQSvN79");

app.use(express.json());
app.use(cors());

// Checkout API
app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body;

    const lineItems = products.map((product) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: product.Title
            },
            unit_amount: product.Price * 100, // assuming price is in rupees, convert to paisa
        },
        quantity: product.quantity
    }));

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3001/success",
            cancel_url: "http://localhost:3001/cancel",
            billing_address_collection: "required" 
        });
        

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating Checkout session:", error);
        res.status(500).json({ error: "Failed to create Checkout session" });
    }
});

app.listen(8081, () => {
    console.log('Server started on port 8081');
});
