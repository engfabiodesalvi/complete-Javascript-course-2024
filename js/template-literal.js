// Javascript Aula 39 - Template Literal

// Javascrip escape sequence:
// -> '\n' - quebra de linha
// -> '\'' - aspa simples

const mensagem1 =
'Oi isso é a minha\n' +
'\'primeira\' mensagem';

console.log(mensagem1);

// Javascript ES6
// Object {}
// Boolean true, false
// string '', ""
// Template ``

// Mantem a formatação da string da forma que é digitada
const mensagem2 = `Oi isso é a minha
'primeira' mensagem`;
console.log(mensagem2);

const nome = 'Rafael';

const email = 
`Olá ${nome}!

Obrigado por se inscrever no canal!

Para aconpanhar os vídeos não se esqueça de ativar o sino!!

Obrigado!
Jhonatan!`;
console.log(email)


// Meu template literal
// Exemplo de gerador de mensagem com orçamento

function generateOrderConfirmationEmail(order) {
    const {
        orderId,
        customerName,
        items,
        totalAmount,
        shippingAddress,
        estimatedDelivery
    } = order;

    const itemDetails = items.map ( item => `
        <li>${item.name} (Qty: ${item.quantity}) - $${item.price.toFixed(2)} each</li>
        `).join('');

    return `
    Subjct: Your Order #${orderId} Confirmation

    Dear ${customerName},

    Thank you for your recent purchase from Fabio Artesanatos!

    Your order #${orderId} has been successfully placed and is being processed.

    **Order Details:**
    <ul>
        ${itemDetails}
    </ul>
    Total Amount: $${totalAmount.toFixed(2)}

    **Shipping Information:**
    Shipping Address: ${shippingAddress.street}, ${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.zipCde}
    Estimated Delivery: ${estimatedDelivery}

    You will receive another email with tracking information once your order has shipped.

    If you have any questions, please don't hesitate to contact us at engfabiodesalvi@gmail.com or (xx) xxxxx-xxxx.

    Thank you for your business!

    Sincerely,
    The Fabio Artesanato Team.
    `;
}

const myOrder = {
    orderId: "ABC12345",
    customerName: "Alice Smith",
    items: [
        { name: "Product A", quantity: 2, price: 15.99 },
        { name: "Product B", quantity: 1, price: 29.50 },
    ],
    totalAmount: 61.48,
    shippingAddress: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zipCde: "90210"
    },
    estimateDelivery: "November 20, 2025"
};

console.log(myOrder);

const emailMessage = generateOrderConfirmationEmail(myOrder);
console.log(emailMessage);